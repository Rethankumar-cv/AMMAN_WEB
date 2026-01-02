import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';

const Testimonials = () => {
    // Sample testimonials - these will be replaced by actual Google Business reviews
    const testimonials = [
        {
            name: 'Rajesh Kumar',
            project: 'Residential Foundation',
            rating: 5,
            text: 'Excellent service! The excavator was delivered on time and the operator was very skilled. Highly recommend for any construction work.',
        },
        {
            name: 'Suresh Builders',
            project: 'Commercial Site Development',
            rating: 5,
            text: 'Professional team, well-maintained equipment, and competitive pricing. We use AMMAN for all our projects now.',
        },
        {
            name: 'Lakshmi Construction',
            project: 'Road Construction',
            rating: 5,
            text: 'Best equipment rental service in Coimbatore. 24/7 availability is a game changer for our tight schedules.',
        },
    ];

    // Replace with your actual Google Business Place ID
    const googleBusinessUrl = 'https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review';

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white mb-4">
                        What Our <span className="text-brand-orange">Customers Say</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="glass-effect p-8 rounded-xl relative hover-lift"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-orange/20" />

                            {/* Rating Stars */}
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-brand-orange text-brand-orange"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* Customer Info */}
                            <div className="border-t border-brand-orange/20 pt-4">
                                <p className="font-bold text-brand-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-400">{testimonial.project}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-gray-300 mb-6">
                        See all our reviews on Google Business
                    </p>
                    <motion.a
                        href={googleBusinessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 bg-brand-white text-brand-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                        <Star size={20} className="fill-yellow-400 text-yellow-400" />
                        <span>View Google Reviews</span>
                        <ExternalLink size={18} />
                    </motion.a>

                    {/* Leave Review CTA */}
                    <div className="mt-6">
                        <a
                            href={googleBusinessUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-orange hover:underline"
                        >
                            Leave us a review →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
