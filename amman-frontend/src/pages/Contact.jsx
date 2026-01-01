import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            details: '+91 98428 67585',
            link: 'tel:+919842867585',
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'ammanearthmoverscbe48@gmail.com',
            link: 'mailto:ammanearthmoverscbe48@gmail.com',
        },
        {
            icon: MapPin,
            title: 'Address',
            details: '123 Construction Lane, Industrial Area, City, State - 123456',
            link: null,
        },
        {
            icon: Clock,
            title: 'Working Hours',
            details: 'Monday - Sunday: 24/7 Service',
            link: null,
        },
    ];

    const whatsappNumber = '919842867585';
    const whatsappMessage = 'Hello! I would like to inquire about vehicle rentals.';

    return (
        <div className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        Get In <span className="text-brand-orange">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have questions or need assistance? We're here to help! Reach out through
                        any of the channels below, and our team will respond promptly.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="glass-effect p-8 rounded-xl hover-lift"
                        >
                            <info.icon className="w-12 h-12 text-brand-orange mb-4" />
                            <h3 className="text-2xl font-bold mb-3">{info.title}</h3>
                            {info.link ? (
                                <a
                                    href={info.link}
                                    className="text-gray-300 hover:text-brand-orange transition-colors text-lg"
                                >
                                    {info.details}
                                </a>
                            ) : (
                                <p className="text-gray-300 text-lg">{info.details}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-effect rounded-xl overflow-hidden h-96 mb-16"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AMMAN EARTH MOVERS Location"
                    ></iframe>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center glass-effect p-12 rounded-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your equipment needs and get a competitive quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href={`tel:+${whatsappNumber.replace(/\s/g, '')}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary inline-flex items-center justify-center space-x-2"
                        >
                            <Phone size={20} />
                            <span>Call Now</span>
                        </motion.a>
                        <motion.a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                whatsappMessage
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary inline-flex items-center justify-center space-x-2"
                        >
                            <MessageCircle size={20} />
                            <span>WhatsApp</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* WhatsApp Floating Button */}
            <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-50"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </motion.a>
        </div>
    );
};

export default Contact;
