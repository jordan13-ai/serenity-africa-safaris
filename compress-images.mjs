import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";

async function findImages(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
            results = results.concat(await findImages(filePath));
        } else {
            if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
                results.push({ path: filePath, size: stat.size });
            }
        }
    }
    return results;
}

async function run() {
    console.log("🔍 Scanning for images to optimize...");
    const publicImagesPath = path.join(process.cwd(), "public/images");
    const images = await findImages(publicImagesPath);
    console.log(`Found ${images.length} images.`);

    let convertedCount = 0;
    let compressedCount = 0;
    const renamedFiles = [];

    for (const img of images) {
        const ext = path.extname(img.path).toLowerCase();
        
        try {
            if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
                // Convert to webp
                const newPath = img.path.substring(0, img.path.lastIndexOf('.')) + '.webp';
                await sharp(img.path)
                    .webp({ quality: 80 })
                    .toFile(newPath);
                
                await fs.unlink(img.path); // delete original
                
                renamedFiles.push({ old: img.path.replace(process.cwd(), ''), new: newPath.replace(process.cwd(), '') });
                console.log(`✅ Converted to WebP: ${path.basename(img.path)}`);
                convertedCount++;
            } else if (ext === ".webp" && img.size > 300 * 1024) {
                // Compress large WebP images (>300KB)
                const tempPath = img.path + '.tmp';
                await sharp(img.path)
                    .resize({ width: 1920, withoutEnlargement: true })
                    .webp({ quality: 75 })
                    .toFile(tempPath);
                
                const newStat = await fs.stat(tempPath);
                if (newStat.size < img.size) {
                    await fs.rename(tempPath, img.path);
                    console.log(`📉 Compressed large WebP: ${path.basename(img.path)} (${Math.round(img.size/1024)}KB -> ${Math.round(newStat.size/1024)}KB)`);
                    compressedCount++;
                } else {
                    await fs.unlink(tempPath); // Compression didn't help much, keep original
                }
            }
        } catch (e) {
            console.error(`❌ Error processing ${img.path}: ${e.message}`);
        }
    }
    
    console.log(`\n🎉 Done! Converted ${convertedCount} images and compressed ${compressedCount} large images.`);
    if (renamedFiles.length > 0) {
        console.log("\n--- CONVERTED FILES FOR CODE UPDATE ---");
        console.log(JSON.stringify(renamedFiles, null, 2));
    }
}

run();
