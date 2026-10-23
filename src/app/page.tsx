import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Flagships from "@/components/Flagships";
import Lab from "@/components/Lab";
import Systems from "@/components/Systems";
import Stack from "@/components/Stack";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <Principles />
      <Flagships />
      <Lab />
      <Systems />
      <Stack />
      <Archive />
      <Contact />
      <Footer />
    </main>
  );
}
