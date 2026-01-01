import { motion } from 'framer-motion';
import { Search, Phone, Truck } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: 'Choose a Vehicle',
            description: 'Browse our fleet and select the perfect equipment for your project needs',
            step: '01',
        },
        {
            icon: Phone,
            title: 'Book Online or Call',
            description: 'Easy booking through our website or direct phone call with instant confirmation',
            step: '02',
        },
        {
            icon: Truck,
            title: 'We Deliver & Operate',
            description: 'Professional delivery with expert operators to your construction site',
            step: '03',
        },
    ];

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
                        How It <span className="text-brand-orange">Works</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Simple, transparent process to get you started
                    </p>
                </motion.div>

                {/* Steps - Horizontal on Desktop, Stacked on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative text-center"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-8xl font-extrabold text-brand-grey/20 pointer-events-none">
                                {step.step}
                            </div>

                            {/* Icon with Scale on Hover */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 inline-flex items-center justify-center w-20 h-20 mb-6 bg-brand-orange/10 rounded-full border-2 border-brand-orange"
                            >
                                <step.icon className="w-10 h-10 text-brand-orange" />
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-brand-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector Line (Hidden on last item and mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-brand-orange/30" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
