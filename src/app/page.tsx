import AccordionPage from "@/components/AccordionPage";
import AppImage from "@/components/AppImage";
import BrandCarousel from "@/components/BrandCarousel";
import Carousel from "@/components/Carousel";
import EventList from "@/components/EventList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import TaskList from "@/components/TaskList";
import TrendingServices from "@/components/TrendingServices";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[url('https://eventstan.com/home/bg-1.svg')] bg-no-repeat bg-cover ">
        <Hero />
        <EventList />
        <TaskList />
        <TrendingServices />
        <Carousel />
      </div>
      <div className="bg-[url('https://eventstan.com/home/bg-3.svg')] bg-no-repeat bg-cover ">
        <BrandCarousel />
        <AccordionPage />
      </div>
      <AppImage />
      <Partners />
      <Footer />
    </main>
  );
}
