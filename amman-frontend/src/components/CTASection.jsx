import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black border-t border-brand-orange/20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto text-center"
            >
                {/* Headline */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-brand-white mb-6">
                    Need a Construction Vehicle{' '}
                    <span className="text-brand-orange">Today?</span>
                </h2>

                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Quick response, professional service, and competitive rates.
                    Get your equipment delivered within hours.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 40px rgba(244, 160, 28, 0.5)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/book')}
                        className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
                    >
                        <Calendar size={22} />
                        <span>Book Now</span>
                    </motion.button>

                    <motion.a
                        href="tel:+919842867585"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 30px rgba(244, 160, 28, 0.3)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary inline-flex items-center space-x-2 text-lg px-8 py-4"
                    >
                        <Phone size={22} />
                        <span>Call Now</span>
                    </motion.a>
                </div>

                {/* Trust Badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 text-gray-400 text-sm"
                >
                    ✓ 24/7 Service  •  ✓ Expert Operators  •  ✓ Modern Fleet
                </motion.p>
            </motion.div>
        </section>
    );
};

export default CTASection;
