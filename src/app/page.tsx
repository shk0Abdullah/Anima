import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/modules/index/hero";
import About from "@/components/modules/index/about";
export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <Hero />
      <About />
    </>
  );
}
