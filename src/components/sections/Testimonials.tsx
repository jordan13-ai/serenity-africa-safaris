import { Star } from "lucide-react";

export function Testimonials() {
    const reviews = [
        {
            name: "Sarah & Daniel",
            rating: 5,
            text: "Our safari experience with Serenity Africa Safaris exceeded every expectation. The guides were incredible, the accommodations were luxurious, and every day felt unforgettable.",
            trip: "Luxury Safari"
        },
        {
            name: "Michael T.",
            rating: 5,
            text: "From the Serengeti to Zanzibar, everything was perfectly organized. The team made us feel comfortable and cared for throughout the entire journey.",
            trip: "Tanzania Safari & Zanzibar"
        },
        {
            name: "Emma & James",
            rating: 5,
            text: "The best safari experience we have ever had. Amazing wildlife, beautiful camps, and exceptional service from start to finish.",
            trip: "Honeymoon Safari"
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What Our Guests Say</h2>
                    <div className="flex justify-center items-center gap-2 text-yellow-500 mb-4">
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <span className="text-foreground font-semibold ml-2">5.0 Rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-card p-8 rounded-xl shadow-sm border border-border">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">
                                &quot;{review.text}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold font-serif text-foreground">{review.name}</h4>
                                <p className="text-xs text-primary uppercase tracking-wide mt-1">{review.trip}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
