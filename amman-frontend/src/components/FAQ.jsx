import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'How do I book a construction vehicle?',
            answer: 'You can book through our website by filling the booking form, calling us at +91 98428 67585, or sending a WhatsApp message. We respond within 2 hours and confirm availability instantly.',
        },
        {
            question: 'What are your rental rates?',
            answer: 'Rates vary by vehicle type and rental duration. Contact us for specific pricing. We offer competitive daily, weekly, and monthly rates with discounts for long-term rentals.',
        },
        {
            question: 'Do you provide operators with the equipment?',
            answer: 'Yes! All our rentals include skilled, professional operators. They are trained, certified, and experienced in operating the specific equipment safely and efficiently.',
        },
        {
            question: 'What areas do you serve?',
            answer: 'We serve Coimbatore, Erode, Salem, Tiruppur, Pollachi, Mettupalayam, Palladam, and surrounding areas across Tamil Nadu. Contact us to confirm service availability in your location.',
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'Cancellations made 24 hours before the scheduled date receive a full refund. Cancellations within 24 hours may incur a small fee. Emergency cancellations are handled case-by-case.',
        },
        {
            question: 'Is the equipment insured?',
            answer: 'Yes, all our equipment is fully insured with comprehensive coverage. We also carry liability insurance for added peace of mind during operations.',
        },
        {
            question: 'How quickly can you deliver equipment?',
            answer: 'For urgent needs, we can deliver within 2-4 hours depending on location and availability. Standard bookings are delivered on your scheduled date. We operate 24/7 for emergencies.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept cash, UPI, bank transfer, and checks. Payment terms are flexible - partial advance with balance on completion for most projects.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-grey to-brand-black">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <HelpCircle className="w-10 h-10 text-brand-orange mr-3" />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white">
                            Frequently Asked <span className="text-brand-orange">Questions</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300">
                        Got questions? We've got answers
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="glass-effect rounded-xl overflow-hidden border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-brand-orange/5 transition-colors duration-300"
                            >
                                <span className="text-lg font-semibold text-brand-white pr-8">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-6 h-6 text-brand-orange" />
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-brand-orange/10">
                                            <p className="pt-4">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-300 mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919842867585"
                            className="btn-primary inline-flex items-center justify-center"
                        >
                            Call Us Now
                        </a>
                        <a
                            href="https://wa.me/919842867585?text=Hi%2C%20I%20have%20a%20question%20about%20vehicle%20rental"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center justify-center"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
