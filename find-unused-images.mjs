import { promises as fs } from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function findImages(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
            results = results.concat(await findImages(filePath));
        } else {
            if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
                results.push(filePath);
            }
        }
    }
    return results;
}

async function run() {
    console.log("🔍 Scanning for images...");
    const publicImagesPath = path.join(process.cwd(), "public/images");
    const images = await findImages(publicImagesPath);
    console.log(`Found ${images.length} images.`);

    const trashDir = path.join(process.cwd(), "public/trash");
    await fs.mkdir(trashDir, { recursive: true });

    let unusedCount = 0;
    
    for (const img of images) {
        const basename = path.basename(img);
        const nameWithoutExt = path.parse(img).name;
        
        try {
            // Search for the basename or filename without extension in src/ and prisma/
            // Using grep -r
            const { stdout } = await execAsync(`grep -r -E "${basename}|${nameWithoutExt}" src/ prisma/ || true`);
            
            if (!stdout.trim()) {
                // No references found!
                console.log(`🗑️ Unused: ${img.replace(process.cwd(), '')}`);
                const relativePath = path.relative(publicImagesPath, img);
                const trashDest = path.join(trashDir, relativePath);
                
                await fs.mkdir(path.dirname(trashDest), { recursive: true });
                await fs.rename(img, trashDest);
                unusedCount++;
            }
        } catch (e) {
            console.error("Error processing", img, e.message);
        }
    }
    
    console.log(`\n✅ Done! Moved ${unusedCount} unused images to public/trash/`);
}

run();
