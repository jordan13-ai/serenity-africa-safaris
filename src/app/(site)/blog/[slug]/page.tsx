import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts as staticPosts } from "@/lib/blog-data";
import { prisma } from "@/lib/prisma";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Link as LinkIcon, ArrowRight } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

interface RelatedPost { id: string; slug: string; title: string; excerpt: string; image: string; category: string }

async function getPost(slug: string) {
  try {
    const cms = await prisma.blogPost.findFirst({ where: { slug, status: "PUBLISHED" } })
    if (cms) {
      return {
        id: cms.id,
        slug: cms.slug,
        title: cms.title,
        excerpt: cms.excerpt ?? "",
        content: cms.body ?? "",
        date: cms.publishedAt ? new Date(cms.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "",
        author: cms.author ?? "Serenity Africa",
        image: cms.coverImage || "/images/destinations/serengeti/serengeti-10.webp",
        category: cms.category ?? "Safari",
      }
    }
  } catch { /* fall through */ }
  return staticPosts.find((p) => p.slug === slug) ?? null
}

async function getRelated(slug: string, category: string): Promise<RelatedPost[]> {
  try {
    const cms = await prisma.blogPost.findMany({
      where: { slug: { not: slug }, category, status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
      take: 3,
      select: { id: true, slug: true, title: true, excerpt: true, coverImage: true, category: true, publishedAt: true },
    })
    if (cms.length > 0) return cms.map(p => ({
      id: p.id, slug: p.slug, title: p.title, excerpt: p.excerpt ?? "",
      image: p.coverImage || "/images/destinations/serengeti/serengeti-10.webp",
      category: p.category ?? "Safari",
    }))
  } catch { /* fall through */ }
  const related = staticPosts.filter(p => p.slug !== slug && p.category === category).slice(0, 3)
  return related.length >= 3 ? related.map(p => ({ id: p.id, slug: p.slug, title: p.title, excerpt: p.excerpt, image: p.image, category: p.category }))
    : [...related, ...staticPosts.filter(p => p.slug !== slug && !related.includes(p))].slice(0, 3)
      .map(p => ({ id: p.id, slug: p.slug, title: p.title, excerpt: p.excerpt, image: p.image, category: p.category }))
}

export async function generateStaticParams() {
    return staticPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPost(slug)
    if (!post) return notFound()

    const related = await getRelated(slug, post.category)

    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            {/* CINEMATIC HERO */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FDFBF7]" />

                <div className="relative z-10 container px-6 mx-auto text-center text-white">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-12 hover:text-primary transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Journal
                        </Link>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="text-primary text-[10px] font-bold tracking-widest uppercase bg-primary/10 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-10 drop-shadow-2xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/70">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary">
                                    <User className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-50">Author</p>
                                    <p className="text-sm font-medium">{post.author}</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-50">Published</p>
                                    <p className="text-sm font-medium">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container px-6 mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 -mt-20 relative z-20">

                    {/* SOCIAL SIDEBAR */}
                    <aside className="hidden lg:block w-16">
                        <div className="sticky top-32 flex flex-col gap-6">
                            <span className="text-[8px] font-bold tracking-widest uppercase text-gray-300 rotate-90 mb-8 whitespace-nowrap">Share Story</span>
                            <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"><Facebook className="w-5 h-5" /></button>
                            <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"><Twitter className="w-5 h-5" /></button>
                            <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"><LinkIcon className="w-5 h-5" /></button>
                        </div>
                    </aside>

                    {/* ARTICLE BODY */}
                    <article className="flex-1 bg-white p-8 md:p-16 lg:p-24 rounded-[3rem] shadow-2xl shadow-black/5">
                        <div
                            className="blog-content prose-headings:font-serif prose-headings:text-[#1A1A1A] prose-p:text-gray-500 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-8"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        <div className="mt-20 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-primary/10 border-4 border-gray-50">
                                <User className="absolute inset-0 m-auto w-12 h-12 text-primary/30" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-xl font-serif text-[#1A1A1A] mb-2">Written by {post.author}</h4>
                                <p className="text-gray-400 font-light text-sm max-w-xl">Our team of safari specialists and wildlife photographers are dedicated to sharing the magic of Tanzania with the world.</p>
                            </div>
                        </div>
                    </article>

                    {/* CTA SIDEBAR */}
                    <aside className="lg:w-80">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-[#1A1A1A] p-10 rounded-[2.5rem] text-white text-center">
                                <Image src="/images/destinations/serengeti/serengeti-12.webp" alt="Safari" width={200} height={200} className="rounded-2xl mx-auto mb-8 object-cover aspect-square" />
                                <h4 className="text-2xl font-serif mb-4">Bespoke Journeys</h4>
                                <p className="text-white/40 font-light text-sm mb-8 leading-relaxed">Let us craft an itinerary that matches the stories you&apos;ve just read.</p>
                                <Link href="/request-quote" className="inline-block w-full bg-primary text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300">
                                    Request Quote
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* RELATED POSTS */}
            <section className="py-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <div className="w-8 h-[1px] bg-primary" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">Keep Reading</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">More <span className="italic text-gray-400">Stories</span></h2>
                        </div>
                        <Link href="/blog" className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary hover:gap-4 transition-all">
                            View All Journal Entries <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {related.map((p) => (
                            <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-lg">
                                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">{p.category}</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-primary transition-colors leading-tight mb-4">{p.title}</h3>
                                <p className="text-gray-400 text-sm font-light line-clamp-2">{p.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
