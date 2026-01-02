import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl font-extrabold text-brand-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400">Last updated: January 2, 2026</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-invert max-w-none"
                >
                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">1. Information We Collect</h2>
                            <p className="leading-relaxed mb-4">
                                When you use our booking service or contact us, we may collect the following information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name and contact information (phone number, email address)</li>
                                <li>Project location and service requirements</li>
                                <li>Booking dates and equipment preferences</li>
                                <li>Any additional information you provide in messages or forms</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">2. How We Use Your Information</h2>
                            <p className="leading-relaxed mb-4">
                                We use the collected information to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Process and fulfill your equipment rental requests</li>
                                <li>Communicate with you about your bookings and our services</li>
                                <li>Send important updates about your rental</li>
                                <li>Improve our services and customer experience</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">3. Information Sharing</h2>
                            <p className="leading-relaxed">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>With our operators and staff to fulfill your service request</li>
                                <li>When required by law or to protect our rights</li>
                                <li>With your explicit consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">4. Data Security</h2>
                            <p className="leading-relaxed">
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">5. Your Rights</h2>
                            <p className="leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">6. Cookies</h2>
                            <p className="leading-relaxed">
                                Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings, but this may affect website functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">7. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                            </p>
                            <div className="mt-4 p-6 bg-brand-grey rounded-lg">
                                <p className="font-semibold text-brand-white mb-2">AMMAN EARTH MOVERS</p>
                                <p>Phone: <a href="tel:+919842867585" className="text-brand-orange hover:underline">+91 98428 67585</a></p>
                                <p>Email: <a href="mailto:ammanearthmoverscbe48@gmail.com" className="text-brand-orange hover:underline">ammanearthmoverscbe48@gmail.com</a></p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
