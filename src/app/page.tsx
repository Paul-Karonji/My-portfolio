import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Flagships from "@/components/Flagships";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <Principles />
      <Flagships />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
