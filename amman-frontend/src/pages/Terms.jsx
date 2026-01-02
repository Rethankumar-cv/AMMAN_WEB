import { motion } from 'framer-motion';

const Terms = () => {
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
                        Terms of Service
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
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">1. Agreement to Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using AMMAN EARTH MOVERS services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you may not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">2. Equipment Rental Terms</h2>
                            <h3 className="text-xl font-semibold text-brand-white mt-4 mb-2">2.1 Booking</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>All bookings are subject to equipment availability</li>
                                <li>We will confirm your booking within 2 hours of submission</li>
                                <li>Confirmed bookings are binding</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-brand-white mt-4 mb-2">2.2 Rental Rates</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Rates are quoted on a per-day, per-week, or per-month basis</li>
                                <li>Rates include equipment, operator, and basic fuel</li>
                                <li>Additional charges may apply for overtime, transport, or special requests</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-brand-white mt-4 mb-2">2.3 Payment Terms</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Advance payment (typically 30-50%) required for booking confirmation</li>
                                <li>Balance payment due upon completion of service</li>
                                <li>Accepted payment methods: Cash, UPI, Bank Transfer, Check</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">3. Cancellation Policy</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>24+ hours notice:</strong> Full refund of advance payment</li>
                                <li><strong>12-24 hours notice:</strong> 50% refund of advance payment</li>
                                <li><strong>Less than 12 hours:</strong> No refund</li>
                                <li>Emergency cancellations handled on case-by-case basis</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">4. Client Responsibilities</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide safe and accessible work site</li>
                                <li>Ensure proper site preparation as advised</li>
                                <li>Provide accurate project requirements</li>
                                <li>Allow operator to work in safe conditions</li>
                                <li>Report any equipment issues immediately</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">5. Our Responsibilities</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide well-maintained, safe equipment</li>
                                <li>Supply trained and certified operators</li>
                                <li>Ensure equipment arrives on scheduled time</li>
                                <li>Maintain comprehensive insurance coverage</li>
                                <li>Respond to service issues promptly</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">6. Liability</h2>
                            <p className="leading-relaxed mb-4">
                                While we maintain comprehensive insurance and safety standards:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We are not liable for damages caused by improper site conditions</li>
                                <li>Client is responsible for underground utilities not properly marked</li>
                                <li>Force majeure events (weather, natural disasters) may void agreements</li>
                                <li>Our liability is limited to the rental value of the equipment</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">7. Modifications to Terms</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">8. Governing Law</h2>
                            <p className="leading-relaxed">
                                These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Coimbatore, Tamil Nadu.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand-orange mb-4">9. Contact Information</h2>
                            <p className="leading-relaxed">
                                For questions about these Terms of Service:
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

export default Terms;
