import { motion } from 'framer-motion';
import { Clock, Shield, Award } from 'lucide-react';

const Highlights = () => {
    const features = [
        {
            icon: Clock,
            title: '24/7 Availability',
            description: 'Round-the-clock service for your urgent construction needs',
        },
        {
            icon: Shield,
            title: 'Expert Operators',
            description: 'Skilled professionals ensuring safe and efficient operations',
        },
        {
            icon: Award,
            title: 'Modern Fleet',
            description: 'Well-maintained, latest equipment for superior performance',
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 20px 40px rgba(244, 160, 28, 0.2)',
                            }}
                            className="glass-effect p-8 rounded-xl relative group transition-all duration-300"
                            style={{
                                border: '1px solid rgba(244, 160, 28, 0.1)',
                            }}
                        >
                            {/* Orange Border Glow on Hover */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: '0 0 20px rgba(244, 160, 28, 0.3)',
                                    border: '1px solid rgba(244, 160, 28, 0.3)',
                                }}
                            />

                            <feature.icon className="w-14 h-14 text-brand-orange mb-4" />
                            <h3 className="text-2xl font-bold text-brand-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
