import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
    const navigate = useNavigate();

    const services = [
        {
            name: 'Excavator',
            description: 'Heavy-duty digging and trenching',
            image: '/images/excavator.png',
        },
        {
            name: 'Bulldozer',
            description: 'Earthmoving and site preparation',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        },
        {
            name: 'Dump Truck',
            description: 'Material transportation and hauling',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
        },
        {
            name: 'Crane',
            description: 'Heavy lifting and construction',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
        },
        {
            name: 'Loader',
            description: 'Material handling and loading',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
        },
        {
            name: 'Compactor',
            description: 'Soil and asphalt compaction',
            image: 'https://images.unsplash.com/photo-1581093458791-9d42e1d5b7d3?w=600&q=80',
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-black to-brand-grey">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white mb-4">
                        Our <span className="text-brand-orange">Equipment</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Professional-grade construction vehicles for every project need
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => navigate('/services')}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-brand-grey">
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <motion.img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-70"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-brand-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{service.description}</p>

                                    {/* Underline Accent */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '60px' }}
                                        className="h-0.5 bg-brand-orange transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/services')}
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <span>View All Services</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;
