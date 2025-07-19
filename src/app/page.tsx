import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Intro from "@/components/landing/intro";
import About from "@/components/landing/about";
import Services from "@/components/landing/services";
import WhyUs from "@/components/landing/why-us";
import Testimonials from "@/components/landing/testimonials";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
