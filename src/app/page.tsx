import Design from "@/components/Design";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Produce from "@/components/Produce";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Produce />
      <Design />
      <Testimonials />
      <Faq />
    </div>
  );
}
