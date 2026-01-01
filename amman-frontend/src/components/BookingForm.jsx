import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitBooking } from '../utils/api';
import { CheckCircle, AlertCircle } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        location: '',
        date: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        'Excavator',
        'Bulldozer',
        'Dump Truck',
        'Crane',
        'Loader',
        'Compactor',
        'Grader',
        'Backhoe',
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await submitBooking(formData);
            setStatus({ type: 'success', message: result.message });
            setFormData({
                name: '',
                phone: '',
                service: '',
                location: '',
                date: '',
                message: '',
            });
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to submit booking. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto glass-effect rounded-2xl p-8 shadow-2xl"
        >
            <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="peer w-full bg-brand-black/50 border-2 border-brand-grey rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none transition-all duration-300"
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-2.5 bg-brand-grey px-2 text-sm text-gray-400 peer-focus:text-brand-orange transition-colors duration-300">
                        Full Name *
                    </label>
                </div>

                {/* Phone Field */}
                <div className="relative">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="peer w-full bg-brand-black/50 border-2 border-brand-grey rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none transition-all duration-300"
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-2.5 bg-brand-grey px-2 text-sm text-gray-400 peer-focus:text-brand-orange transition-colors duration-300">
                        Phone Number *
                    </label>
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="peer w-full bg-brand-black/50 border-2 border-brand-grey rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                    <label className="absolute left-4 -top-2.5 bg-brand-grey px-2 text-sm text-gray-400 peer-focus:text-brand-orange transition-colors duration-300">
                        Service Type *
                    </label>
                </div>

                {/* Location Field */}
                <div className="relative">
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="peer w-full bg-brand-black/50 border-2 border-brand-grey rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none transition-all duration-300"
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-2.5 bg-brand-grey px-2 text-sm text-gray-400 peer-focus:text-brand-orange transition-colors duration-300">
                        Location *
                    </label>
                </div>

                {/* Date Field */}
                <div className="relative">
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="peer w-full bg-brand-black/50 border-2 border-brand-grey rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none transition-all duration-300"
                    />
                    <label className="absolute left-4 -top-2.5 bg-brand-grey px-2 text-sm text-gray-400 peer-focus:text-brand-orange transition-colors duration-300">
                        Required Date *
                    </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="peer w-full bg-brand-black/50 border-2 border-brand-grey rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange focus:outline-none transition-all duration-300 resize-none"
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-2.5 bg-brand-grey px-2 text-sm text-gray-400 peer-focus:text-brand-orange transition-colors duration-300">
                        Additional Requirements (Optional)
                    </label>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                </motion.button>

                {/* Status Message */}
                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center space-x-2 p-4 rounded-lg ${status.type === 'success'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}
                    >
                        {status.type === 'success' ? (
                            <CheckCircle size={20} />
                        ) : (
                            <AlertCircle size={20} />
                        )}
                        <span>{status.message}</span>
                    </motion.div>
                )}
            </div>
        </motion.form>
    );
};

export default BookingForm;
