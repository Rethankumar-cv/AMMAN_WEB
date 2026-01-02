import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import ServicesPreview from '../components/ServicesPreview';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Highlights />
            <ServicesPreview />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ServiceAreas />
            <FAQ />
            <CTASection />
        </div>
    );
};

export default Home;
