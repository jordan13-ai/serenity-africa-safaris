
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://serenityafricasafaris.com'

    const staticRoutes = [
        { path: '', priority: 1.0 },
        { path: '/about', priority: 0.8 },
        { path: '/contact', priority: 0.9 },
        { path: '/request-quote', priority: 0.9 },
        { path: '/safari', priority: 0.9 },
        { path: '/kilimanjaro', priority: 0.9 },
        { path: '/destinations', priority: 0.9 },
        { path: '/accommodation', priority: 0.9 },
        { path: '/all-safaris', priority: 0.8 },
        { path: '/all-day-trips', priority: 0.8 },
        { path: '/blog', priority: 0.7 },
        { path: '/activities', priority: 0.8 },
        { path: '/itineraries', priority: 0.8 },
        { path: '/privacy', priority: 0.3 },
        { path: '/terms', priority: 0.3 },
    ]

    const accommodationSlugs = [
        'serenity-camp-lodges',
        'exclusive-tented-camps',
        'luxury-safari-lodges',
        'treehouse-suites',
        'beachfront-villas',
    ]

    const destinationSlugs = [
        'serengeti', 'ngorongoro', 'tarangire', 'lake-manyara',
        'nyerere', 'ruaha', 'zanzibar', 'arusha-park', 'kilimanjaro',
    ]

    const kilimanjaroRoutes = [
        'lemosho-route', 'machame-route', 'marangu-route',
        'rongai-route', 'umbwe-route', 'northern-circuit',
        'joining-groups', 'guide',
    ]

    const safariSubPages = [
        'balloon-safaris', 'cultural-encounters', 'family-safaris',
        'great-migration', 'honeymoon-escapes', 'luxury-safari',
        'photography-safaris', 'walking-safaris',
    ]

    const allSafariSubPages = [
        'mid-range', 'luxury', 'migration', 'cultural',
        'honeymoon', 'tented-camps', 'lodge', 'guide',
    ]

    const allDayTripSubPages = [
        'one-day-safari', 'arusha-excursions', 'cultural-tours',
        'kili-hiking', 'moshi-excursions', 'west-kilimanjaro',
    ]

    const activitySlugs = [
        'game-drives', 'balloon-safaris', 'walking-safaris',
        'cultural-experiences', 'boat-safaris', 'mountain-climbing', 'beach-escapes',
    ]

    const tourSlugs = [
        '7-day-machame-route', '5-day-big-five-safari', '8-day-lemosho-route',
        '10-day-migration-beach', '3-day-fly-in-serengeti', '5-day-ruaha-wilderness',
        '7-day-southern-circuit', '3-day-nyerere-river-safari', '5-day-zanzibar-escape',
        '8-day-luxury-honeymoon', '2-day-tarangire-ngorongoro', '6-day-ruaha-mikumi',
        '4-day-nyerere-fly-in', '7-days-luxury-serengeti-ngorongoro-safari',
    ]

    const blogSlugs = [
        'great-migration-wonders', 'kilimanjaro-facts', 'zanzibar-beaches-culture',
        'ngorongoro-crater-eden', 'tanzania-cultural-tribes', 'serengeti-big-five',
    ]

    const now = new Date()

    const entries: MetadataRoute.Sitemap = [
        ...staticRoutes.map(({ path, priority }) => ({
            url: `${baseUrl}${path}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority,
        })),
        ...destinationSlugs.map((slug) => ({
            url: `${baseUrl}/destinations/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        ...kilimanjaroRoutes.map((slug) => ({
            url: `${baseUrl}/kilimanjaro/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        ...safariSubPages.map((slug) => ({
            url: `${baseUrl}/safari/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...allSafariSubPages.map((slug) => ({
            url: `${baseUrl}/all-safaris/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...allDayTripSubPages.map((slug) => ({
            url: `${baseUrl}/all-day-trips/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...activitySlugs.map((slug) => ({
            url: `${baseUrl}/activities/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...tourSlugs.map((slug) => ({
            url: `${baseUrl}/itineraries/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        ...blogSlugs.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        })),
        ...accommodationSlugs.map((slug) => ({
            url: `${baseUrl}/accommodation/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
    ]

    return entries
}
