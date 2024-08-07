import AppImage from "@/components/AppImage";
import CarouselWrapper from "@/components/CarouselWrapper";
import EventList from "@/components/EventList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import TaskList from "@/components/TaskList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[url('https://eventstan.com/home/bg-1.svg')] bg-no-repeat bg-cover ">
        <Hero />
        <EventList/>
        <TaskList/>
        <AppImage/>
        {/* <CarouselWrapper/> */}
      </div>
      <Partners/>
      <Footer/>
    </main>
  );
}
