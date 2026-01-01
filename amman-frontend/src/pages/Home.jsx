import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import ServicesPreview from '../components/ServicesPreview';
import HowItWorks from '../components/HowItWorks';
import ServiceAreas from '../components/ServiceAreas';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Highlights />
            <ServicesPreview />
            <HowItWorks />
            <ServiceAreas />
            <CTASection />
        </div>
    );
};

export default Home;
