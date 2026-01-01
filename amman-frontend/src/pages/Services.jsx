import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Excavator',
            description: 'Heavy-duty excavators for digging, trenching, and demolition work. Perfect for large-scale construction projects.',
            image: '/images/excavator.png',
        },
        {
            title: 'Bulldozer',
            description: 'Powerful bulldozers for earthmoving, grading, and site preparation. Ideal for land clearing and leveling.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
        },
        {
            title: 'Dump Truck',
            description: 'Large capacity dump trucks for material transportation. Efficient hauling of soil, gravel, and construction debris.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        },
        {
            title: 'Crane',
            description: 'Modern tower and mobile cranes for lifting heavy materials and equipment. Essential for high-rise construction.',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        },
        {
            title: 'Loader',
            description: 'Versatile wheel loaders for material handling and site cleanup. Perfect for loading and transporting bulk materials.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
        },
        {
            title: 'Compactor',
            description: 'Road rollers and compactors for soil and asphalt compaction. Essential for road construction and paving projects.',
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
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        Our <span className="text-brand-orange">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Professional construction equipment rental services with modern machinery,
                        expert operators, and competitive rates. All vehicles are well-maintained
                        and ready for your project.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            onClick={() => navigate('/book')}
                            className="cursor-pointer"
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                index={index}
                            />
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center glass-effect p-12 rounded-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
