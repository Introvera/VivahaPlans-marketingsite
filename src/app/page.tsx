
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Section1 from "@/components/section1";
import HowItWork from "@/components/howItWork";
import OurFeature from "@/components/ourFeature";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section1 />
      <HowItWork />
      <OurFeature />
      <Testimonials />
      <Footer />
    </div>
  );
}
