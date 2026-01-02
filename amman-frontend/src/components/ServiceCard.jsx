import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, image, index, pricing, specs }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-brand-grey rounded-xl overflow-hidden hover-lift border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>

                {/* Pricing Badge */}
                {pricing && (
                    <div className="absolute top-4 right-4 bg-brand-orange px-4 py-2 rounded-full">
                        <span className="font-bold text-brand-black text-sm">{pricing}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {title}
                </h3>

                {/* Specs */}
                {specs && (
                    <p className="text-sm text-brand-orange mb-3">{specs}</p>
                )}

                <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

                {/* Book Now Link */}
                <div className="flex items-center text-brand-orange group-hover:text-brand-white transition-colors duration-300">
                    <span className="font-semibold mr-2">Book Now</span>
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowRight size={18} />
                    </motion.div>
                </div>

                {/* Animated Underline */}
                <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100px' }}
                    className="h-0.5 bg-brand-orange mt-2 transition-all duration-300"
                />
            </div>
        </motion.div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    pricing: PropTypes.string,
    specs: PropTypes.string,
};

export default ServiceCard;
