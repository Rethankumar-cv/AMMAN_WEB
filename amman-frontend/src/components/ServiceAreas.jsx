import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
    const cities = [
        'Coimbatore',
        'Erode',
        'Salem',
        'Tiruppur',
        'Pollachi',
        'Mettupalayam',
        'Palladam',
        'Surrounding Areas',
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-grey">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <MapPin className="w-8 h-8 text-brand-orange mr-3" />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white">
                            Serving Across <span className="text-brand-orange">Tamil Nadu</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Reliable construction equipment delivery throughout the region
                    </p>
                </motion.div>

                {/* City Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {cities.map((city, index) => (
                        <motion.div
                            key={city}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 20px rgba(244, 160, 28, 0.3)',
                            }}
                            className="px-6 py-3 bg-brand-black/50 backdrop-blur-sm border border-brand-orange/20 rounded-full text-brand-white font-medium hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-300 cursor-default"
                        >
                            {city}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAreas;
