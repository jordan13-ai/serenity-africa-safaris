"use client"
import Link from "next/link";
import Image from "next/image";
import { blogPosts as staticPosts } from "@/lib/blog-data";
import { ArrowRight, Search, Clock, User, Calendar } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface Post {
  id: string; slug: string; title: string; excerpt: string; date: string;
  author: string; image: string; category: string;
}

function normalize(p: Record<string, unknown>): Post {
  return {
    id: p.id as string,
    slug: p.slug as string,
    title: p.title as string,
    excerpt: (p.excerpt as string) ?? "",
    author: (p.author as string) ?? "Serenity Africa",
    category: (p.category as string) ?? "Safari",
    image: (p.coverImage as string) || "/images/destinations/serengeti/serengeti-10.webp",
    date: p.publishedAt ? new Date(p.publishedAt as string).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : (p.date as string) ?? "",
  }
}

const tags = ["Serengeti", "Safari Tips", "Migration", "Zanzibar", "Luxury", "Photography", "Wildlife", "Conservation"];

export default function BlogListingPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ limit: "50" })
      if (activeCategory !== "All") params.set("category", activeCategory)
      if (searchTerm) params.set("q", searchTerm)
      const res = await fetch(`/api/blog?${params}`)
      if (res.ok) {
        const json = await res.json()
        if (json.posts?.length > 0) {
          setPosts(json.posts.map(normalize))
          setLoading(false)
          return
        }
      }
    } catch { /* fall through to static */ }
    // Fallback to static data
    const filtered = staticPosts.filter(p => {
      const matchSearch = !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchCat = activeCategory === "All" || p.category === activeCategory
      return matchSearch && matchCat
    })
    setPosts(filtered.map(p => ({ ...p, image: p.image })))
    setLoading(false)
  }, [activeCategory, searchTerm])

  useEffect(() => {
    const t = setTimeout(() => fetchPosts(), 300)
    return () => clearTimeout(t)
  }, [fetchPosts])

  const allCategories = ["All", ...Array.from(new Set([...posts.map(p => p.category), ...staticPosts.map(p => p.category)]))]
  const popularPosts = posts.slice(0, 3)
  const featured = posts[0]
  const remainingPosts = posts.slice(1)

    return (
        <main className="min-h-screen bg-[#FDFBF7]">

            {/* MASTHEAD / FEATURED POST */}
            {featured && (
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />

                <div className="relative z-10 container px-6 mx-auto pb-20 lg:pb-32">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                Featured Article
                            </span>
                            <div className="w-12 h-[1px] bg-white/30" />
                            <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">
                                {featured.category}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                            {featured.title}
                        </h1>
                        <p className="text-white/70 font-light text-xl leading-relaxed mb-10 max-w-2xl">
                            {featured.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-8">
                            <Link
                                href={`/blog/${featured.slug}`}
                                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                Read Full Story <ArrowRight className="w-4 h-4" />
                            </Link>
                            <div className="flex items-center gap-4 text-white/40">
                                <span className="flex items-center gap-2 text-xs uppercase tracking-widest"><User className="w-3.5 h-3.5" /> {featured.author}</span>
                                <span className="flex items-center gap-2 text-xs uppercase tracking-widest"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}

            {/* SEARCH & FILTERS */}
            <section className="py-12 bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4">
                            {allCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                                        activeCategory === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">

                        {/* LEFT COLUMN: ARTICLES */}
                        <div className="w-full lg:w-8/12">
                            {loading ? (
                              <div className="text-center py-20 text-gray-400 text-sm">Loading articles...</div>
                            ) : remainingPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                                    {remainingPosts.map((post) => (
                                        <article key={post.id} className="group flex flex-col">
                                            <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 block shadow-xl shadow-black/5">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                    <span className="bg-primary text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </Link>

                                            <div className="flex-1 flex flex-col">
                                                <div className="flex items-center gap-4 mb-4 text-[#A1A1A1] text-[10px] font-bold tracking-widest uppercase">
                                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                                    <div className="w-1 h-1 rounded-full bg-gray-200" />
                                                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 5 Min Read</span>
                                                </div>

                                                <Link href={`/blog/${post.slug}`}>
                                                    <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                                        {post.title}
                                                    </h3>
                                                </Link>

                                                <p className="text-gray-500 font-light text-[15px] leading-relaxed line-clamp-3 mb-8 flex-1">
                                                    {post.excerpt}
                                                </p>

                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary group-hover:gap-5 transition-all duration-300"
                                                >
                                                    Dive Deeper <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                                    <h3 className="text-2xl font-serif text-gray-400 mb-2">No articles found</h3>
                                    <p className="text-gray-400 font-light">Try adjusting your search or category filter.</p>
                                    <button
                                        onClick={() => {setSearchTerm(""); setActiveCategory("All")}}
                                        className="mt-6 text-primary font-bold text-[10px] uppercase tracking-widest"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN: SIDEBAR */}
                        <aside className="w-full lg:w-4/12 space-y-16">

                            {/* Popular Posts */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-50 shadow-sm">
                                <h4 className="text-xl font-serif text-[#1A1A1A] mb-8 border-b border-gray-50 pb-4">Popular Stories</h4>
                                <div className="space-y-8">
                                    {popularPosts.map((post) => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-4">
                                            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                                                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h5 className="text-sm font-bold text-[#1A1A1A] leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h5>
                                                <span className="text-[10px] text-gray-400 uppercase tracking-widest">{post.date}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl text-white">
                                <h4 className="text-xl font-serif mb-8 border-b border-white/5 pb-4">Trending Tags</h4>
                                <div className="flex flex-wrap gap-3">
                                    {tags.map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-white/5 hover:bg-primary hover:text-white border border-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase cursor-pointer transition-all duration-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10">
                                <h4 className="text-xl font-serif text-[#1A1A1A] mb-4">Safari Soul</h4>
                                <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">Join our newsletter for exclusive wildlife photography, safari guides, and secret travel spots in Tanzania.</p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-white border border-gray-100 rounded-xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                    <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-primary transition-all duration-300">
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

            {/* PRE-FOOTER CTA */}
            <section className="relative py-32 overflow-hidden bg-[#1A1A1A]">
                <Image
                    src="/images/destinations/serengeti/serengeti-10.webp"
                    alt="CTA Background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="relative z-10 container px-6 mx-auto text-center max-w-4xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase block mb-8">Adventure Awaits</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
                        Start Planning Your <br /><span className="italic text-white/50">Tanzania Legacy</span>
                    </h2>
                    <p className="text-white/60 font-light text-xl mb-12 max-w-2xl mx-auto">
                        Whether it&apos;s the Great Migration, the peaks of Kilimanjaro, or the spices of Zanzibar, your story starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/request-quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-12 py-6 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Request Itinerary <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/destinations"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/20 text-white px-12 py-6 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-primary transition-all duration-300"
                        >
                            Explore Destinations
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
