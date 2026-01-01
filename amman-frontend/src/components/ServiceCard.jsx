import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-brand-grey hover-lift"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-70"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-brand-white group-hover:text-brand-orange transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

                {/* Hover Underline */}
                <div className="relative overflow-hidden">
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-brand-orange font-semibold group"
                    >
                        <span>Book Now</span>
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                    <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        className="h-0.5 bg-brand-orange mt-1"
                    />
                </div>
            </div>
        </motion.div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default ServiceCard;
