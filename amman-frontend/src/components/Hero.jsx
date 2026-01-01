import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
            {/* Animated Background Elements - Ambient Motion */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.03, 0.05, 0.03],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-20 right-20 w-96 h-96 bg-brand-orange rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -90, 0],
                    opacity: [0.05, 0.03, 0.05],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-brand-orange rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* 3-Line Sequential Headline Animation */}
                <div className="mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold leading-tight text-brand-white"
                    >
                        All Types of
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold leading-tight text-brand-white"
                    >
                        Construction Vehicles
                    </motion.h1>

                    {/* "Available" with Orange Glow Pulse */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold leading-tight text-brand-orange relative"
                    >
                        <motion.span
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(244, 160, 28, 0.3)',
                                    '0 0 40px rgba(244, 160, 28, 0.6)',
                                    '0 0 20px rgba(244, 160, 28, 0.3)',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                            }}
                        >
                            Available
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                >
                    Professional equipment for contractors, builders, and landowners.
                    <br />
                    Quality machinery. Reliable service. Competitive rates.
                </motion.p>

                {/* CTA Buttons - Enhanced Animations */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link to="/book">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 40px rgba(244, 160, 28, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex items-center space-x-2"
                        >
                            <TrendingUp size={20} />
                            <span>Book a Vehicle</span>
                        </motion.button>
                    </Link>

                    <a href="tel:+919842867585">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                borderColor: '#F4A01C',
                                color: '#F4A01C',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary flex items-center space-x-2"
                        >
                            <Phone size={20} />
                            <span>Call Now</span>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
