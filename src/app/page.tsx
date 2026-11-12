import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Providers>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
    </Providers>
  );
}
