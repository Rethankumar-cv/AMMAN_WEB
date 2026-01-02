import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, Wrench, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Clock,
            title: '24/7 Availability',
            description: 'Emergency? No problem. We operate round the clock, 365 days a year to meet your urgent construction needs.',
        },
        {
            icon: Shield,
            title: 'Fully Insured',
            description: 'Comprehensive insurance coverage on all equipment and operations. Your project is protected at all times.',
        },
        {
            icon: Users,
            title: 'Expert Operators',
            description: 'Certified, trained professionals with years of experience. Safety and efficiency are our top priorities.',
        },
        {
            icon: Award,
            title: '10+ Years Experience',
            description: 'Over a decade serving Tamil Nadu\'s construction industry. Trusted by hundreds of contractors and builders.',
        },
        {
            icon: Wrench,
            title: 'Well-Maintained Fleet',
            description: 'Regular maintenance and inspections ensure our equipment operates at peak performance every time.',
        },
        {
            icon: BadgeCheck,
            title: 'Competitive Rates',
            description: 'Transparent pricing with no hidden fees. Flexible rental terms and discounts for long-term projects.',
        },
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
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white mb-4">
                        Why Choose <span className="text-brand-orange">AMMAN?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We're not just equipment rental - we're your construction partner
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-brand-black/50 backdrop-blur-sm p-8 rounded-xl border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300 hover-lift"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-6">
                                <reason.icon className="w-8 h-8 text-brand-orange" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-brand-white mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-brand-orange mb-1">500+</p>
                            <p className="text-gray-400">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-brand-orange mb-1">20+</p>
                            <p className="text-gray-400">Vehicles in Fleet</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-brand-orange mb-1">100%</p>
                            <p className="text-gray-400">Customer Satisfaction</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
