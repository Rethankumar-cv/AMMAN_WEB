import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';
import { Clock, Shield, Award } from 'lucide-react';

const Book = () => {
    const benefits = [
        {
            icon: Clock,
            title: 'Quick Response',
            description: 'Fast approval and equipment deployment',
        },
        {
            icon: Shield,
            title: 'Fully Insured',
            description: 'All equipment covered by comprehensive insurance',
        },
        {
            icon: Award,
            title: 'Quality Service',
            description: 'Professional operators and well-maintained fleet',
        },
    ];

    return (
        <div className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        Book Your <span className="text-brand-orange">Vehicle</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        Fill out the form below to request equipment rental. Our team will
                        contact you shortly to confirm availability and finalize the booking.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="glass-effect p-6 rounded-xl text-center hover-lift"
                        >
                            <benefit.icon className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-gray-300">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Booking Form */}
                <BookingForm />

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center text-gray-400"
                >
                    <p>
                        Need immediate assistance?{' '}
                        <a
                            href="tel:+919842867585"
                            className="text-brand-orange hover:underline font-semibold"
                        >
                            Call us at +91 98428 67585
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Book;
