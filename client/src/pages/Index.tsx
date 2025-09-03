import AdvancedFeaturesSection from "../components/AdvancedFeaturesSection";
import CompanyLogosSection from "../components/CompanyLogosSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

const Index = () => {
    return(
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroSection />
                <CompanyLogosSection />
                <FeaturesSection />
                <StatsSection />
                <HowItWorksSection />
                <AdvancedFeaturesSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection/>
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;