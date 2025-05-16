import ContactSection from "../layouts/ContactSection";
import DoctorSection from "../layouts/DoctorSection";
import Hero from "../layouts/Hero";
import ServiceSection from "../layouts/ServiceSection";
import TestimonialSection from "../layouts/TestimonialSection";
import FeatureProduct from "../layouts/FeatureProduct";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-inherit bg-center bg-[url('https://images.pexels.com/photos/3845407/pexels-photo-3845407.jpeg?auto=compress&cs=tinysrgb&w=600')]">
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
