import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Challenges from "@/components/Challenges";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Challenges />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
