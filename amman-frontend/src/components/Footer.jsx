import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Book Now', path: '/book' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-brand-grey text-brand-white relative">
            {/* Orange Gradient Divider */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-orange to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/images/logo.png"
                            alt="AMMAN EARTH MOVERS"
                            className="h-16 w-auto object-contain mb-4"
                        />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Professional construction vehicle rentals for contractors, builders, and landowners.
                            Quality equipment, reliable service.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-gray-300 hover:text-brand-orange transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-brand-orange transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className="text-gray-300 hover:text-brand-orange transition-colors">
                                    Book Now
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-brand-orange transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-300 text-sm hover:text-brand-orange transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-300 text-sm hover:text-brand-orange transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-bold mb-4 text-brand-orange">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Phone size={18} className="text-brand-orange" />
                                <a href="tel:+919842867585" className="hover:text-brand-orange transition-colors">
                                    +91 98428 67585
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Mail size={18} className="text-brand-orange" />
                                <a href="mailto:ammanearthmoverscbe48@gmail.com" className="hover:text-brand-orange transition-colors">
                                    ammanearthmoverscbe48@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-300">
                                <MapPin size={18} className="text-brand-orange mt-1" />
                                <span>123 Construction Lane, Industrial Area, City, State</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    whileHover={{
                                        y: -4,
                                        boxShadow: '0 0 0 3px rgba(244, 160, 28, 0.3)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-brand-black p-3 rounded-full hover:bg-brand-orange transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} AMMAN EARTH MOVERS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
