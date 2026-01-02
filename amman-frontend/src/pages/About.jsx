import { motion } from 'framer-motion';

const About = () => {
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
                    <h1 className="text-5xl md:text-6xl font-extrabold text-brand-white mb-6">
                        About <span className="text-brand-orange">AMMAN EARTH MOVERS</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your trusted partner in construction equipment rental across Tamil Nadu
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Our Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h2 className="text-3xl font-bold text-brand-orange mb-4">Our Story</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Founded over a decade ago, AMMAN EARTH MOVERS has been serving the construction industry across Tamil Nadu with dedication and professionalism. What started as a small fleet of excavators has grown into a comprehensive equipment rental service trusted by hundreds of contractors, builders, and landowners.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Our commitment to quality equipment, expert operators, and customer satisfaction has made us the go-to choice for construction projects of all sizes - from residential foundations to large-scale commercial developments.
                        </p>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h2 className="text-3xl font-bold text-brand-orange mb-4">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To provide reliable, professional construction equipment rental services that help our clients complete their projects on time and within budget. We strive to be more than just an equipment provider - we aim to be a trusted partner in your construction success.
                        </p>
                    </motion.div>

                    {/* Why We're Different */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h2 className="text-3xl font-bold text-brand-orange mb-6">Why We're Different</h2>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                                <p className="text-gray-300 leading-relaxed">
                                    <strong className="text-brand-white">24/7 Availability:</strong> We understand construction doesn't follow a 9-5 schedule. Our team is available around the clock for your emergencies.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                                <p className="text-gray-300 leading-relaxed">
                                    <strong className="text-brand-white">Expert Operators:</strong> Every vehicle comes with a certified, experienced operator who knows the equipment inside and out.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                                <p className="text-gray-300 leading-relaxed">
                                    <strong className="text-brand-white">Regular Maintenance:</strong> Our fleet undergoes rigorous maintenance schedules to ensure peak performance and reliability.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                                <p className="text-gray-300 leading-relaxed">
                                    <strong className="text-brand-white">Comprehensive Insurance:</strong> All our equipment and operations are fully insured for your peace of mind.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service Areas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h2 className="text-3xl font-bold text-brand-orange mb-4">Service Areas</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We proudly serve the following areas across Tamil Nadu:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Coimbatore', 'Erode', 'Salem', 'Tiruppur', 'Pollachi', 'Mettupalayam', 'Palladam', 'Surrounding Areas'].map((area) => (
                                <div key={area} className="text-gray-400">• {area}</div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center glass-effect p-12 rounded-xl"
                    >
                        <h2 className="text-3xl font-bold text-brand-white mb-4">
                            Ready to Work Together?
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Contact us today to discuss your project needs and get a competitive quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+919842867585" className="btn-primary">
                                Call +91 98428 67585
                            </a>
                            <a href="mailto:ammanearthmoverscbe48@gmail.com" className="btn-secondary">
                                Email Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
