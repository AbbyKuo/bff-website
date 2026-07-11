import Hero from "@/src/app/components/Hero";
import About from "@/src/app/components/About";
import Sessions from "@/src/app/components/Sessions";
import Navbar from "./components/Navbar";
import Locations from "./components/Locations";
import Impact from "./components/Impact";
import Join from "./components/Join";
import Footer from "./components/Footer";
import CommunityGallery from "./components/CommunityGallery";

export default function Home() {
  return (
   <>
     <Navbar />
     <Hero />
     <About />
     <Sessions />
     <Locations />
     <Impact />
     <CommunityGallery />
     <Join />
     <Footer />
   </>
  )    
}