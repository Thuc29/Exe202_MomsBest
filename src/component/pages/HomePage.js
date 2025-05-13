import ContactSection from "../layouts/ContactSection";
import DoctorSection from "../layouts/DoctorSection";
import Hero from "../layouts/Hero";
import ServiceSection from "../layouts/ServiceSection";
import TestimonialSection from "../layouts/TestimonialSection";
import FeatureProduct from "../layouts/FeatureProduct";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        <FeatureProduct />
        <DoctorSection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
