import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Filter, Award } from 'lucide-react';

const Services = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');

    // Data-driven structure - Backend ready
    const services = [
        {
            id: 1,
            name: 'Excavator 140',
            category: 'Excavation',
            description: 'Heavy-duty excavation for deep digging and trenching operations',
            image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            popular: false,
        },
        {
            id: 2,
            name: 'Excavator 210',
            category: 'Excavation',
            description: 'Large-scale earthmoving projects with superior power and reach',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            popular: true, // Most popular
        },
        {
            id: 3,
            name: 'Backhoe Loader',
            category: 'Loading',
            description: 'Versatile digging and loading operations for construction sites',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
            popular: false,
        },
        {
            id: 4,
            name: 'Skid Steer Loader',
            category: 'Loading',
            description: 'Compact loader for tight spaces and material handling tasks',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
            popular: false,
        },
        {
            id: 5,
            name: 'Dozer',
            category: 'Earthmoving',
            description: 'Powerful bulldozer for land clearing and heavy earthmoving',
            image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&q=80',
            popular: false,
        },
        {
            id: 6,
            name: 'Soil Compactor',
            category: 'Compaction',
            description: 'Efficient soil compaction for stable foundation preparation',
            image: 'https://images.unsplash.com/photo-1581093458791-9d42e1d5b7d3?w=800&q=80',
            popular: false,
        },
        {
            id: 7,
            name: 'Mini Roller',
            category: 'Compaction',
            description: 'Compact roller for small areas and finishing work',
            image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80',
            popular: false,
        },
        {
            id: 8,
            name: 'Double Drum Roller',
            category: 'Compaction',
            description: 'Heavy-duty roller for road construction and asphalt compaction',
            image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&q=80',
            popular: false,
        },
        {
            id: 9,
            name: 'Open Taurus',
            category: 'Transport',
            description: 'Reliable shifting vehicle for equipment transportation',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
            popular: false,
        },
        {
            id: 10,
            name: 'Tractor',
            category: 'Utility',
            description: 'Multi-purpose tractor for various construction and agriculture tasks',
            image: 'https://images.unsplash.com/photo-1581093458791-9d42e1d5b7d3?w=800&q=80',
            popular: false,
        },
        {
            id: 11,
            name: 'Tipper',
            category: 'Transport',
            description: 'Large capacity tipper for material transportation and disposal',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
            popular: false,
        },
    ];

    // Get unique categories for filter
    const categories = ['All', ...new Set(services.map((s) => s.category))];

    // Filter services
    const filteredServices = activeFilter === 'All'
        ? services
        : services.filter((s) => s.category === activeFilter);

    // Handle booking
    const handleBookService = (serviceName) => {
        navigate('/book', { state: { selectedService: serviceName } });
    };

    return (
        <div className="min-h-screen py-24 bg-brand-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-brand-white mb-4">
                        Our <span className="text-brand-orange">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Reliable construction vehicles for every job
                    </p>

                    {/* Animated Orange Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '120px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto rounded-full"
                    />
                </motion.div>

                {/* Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Filter className="w-5 h-5 text-brand-orange" />
                        <span className="text-brand-white font-semibold">Filter by Category:</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                        ? 'bg-brand-orange text-brand-black shadow-lg shadow-brand-orange/30'
                                        : 'bg-brand-grey text-gray-300 hover:bg-brand-orange/20 hover:text-brand-orange'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 20px 40px rgba(244, 160, 28, 0.2)',
                            }}
                            className="group relative bg-brand-grey rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => handleBookService(service.name)}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                                    className="absolute top-4 right-4 z-10 bg-brand-orange text-brand-black px-3 py-1 rounded-full flex items-center space-x-1 text-xs font-bold shadow-lg"
                                >
                                    <Award size={14} />
                                    <span>POPULAR</span>
                                </motion.div>
                            )}

                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <motion.img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.4 }}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-70"></div>

                                {/* Category Badge on Image */}
                                <div className="absolute bottom-3 left-3 bg-brand-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-brand-orange text-xs font-semibold">
                                        {service.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-white mb-2 uppercase tracking-wide group-hover:text-brand-orange transition-colors duration-300">
                                    {service.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Book Now Button */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center space-x-2 text-brand-orange font-semibold group-hover:text-brand-white transition-colors duration-300"
                                >
                                    <span>Book Now</span>
                                    <ChevronRight size={18} />
                                </motion.div>

                                {/* Orange Accent Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    className="h-1 bg-brand-orange mt-4 rounded-full transition-all duration-400"
                                    style={{
                                        boxShadow: '0 0 10px rgba(244, 160, 28, 0.5)'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredServices.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-400 text-xl">No services found in this category.</p>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center glass-effect p-12 rounded-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                        Need Custom Equipment Solutions?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We offer customized equipment packages for large projects. Contact us
                        to discuss your specific requirements and get a tailored quote.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="btn-primary"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
