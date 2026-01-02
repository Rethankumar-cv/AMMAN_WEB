import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();

    // Placeholder gallery - replace with your actual vehicle photos
    const galleryItems = [
        {
            title: 'Excavator CAT 320',
            category: 'Excavators',
            image: '/images/excavator.png',
        },
        {
            title: 'Bulldozer D6T',
            category: 'Bulldozers',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
        },
        {
            title: 'Dump Truck 25T',
            category: 'Dump Trucks',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        },
        {
            title: 'Tower Crane',
            category: 'Cranes',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        },
        {
            title: 'Wheel Loader',
            category: 'Loaders',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
        },
        {
            title: 'Road Roller',
            category: 'Compactors',
            image: 'https://images.unsplash.com/photo-1581093458791-9d42e1d5b7d3?w=800&q=80',
        },
    ];

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
                        Our <span className="text-brand-orange">Fleet</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Professional-grade construction equipment, well-maintained and ready for your project
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-brand-grey cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-70"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-sm text-brand-orange mb-2">{item.category}</p>
                                <h3 className="text-2xl font-bold text-brand-white mb-4">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-300 mb-6">
                        Need to see our equipment in person? Visit our depot or request a demonstration.
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

export default Gallery;
