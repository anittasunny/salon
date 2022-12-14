import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import "./Container.css";

import { BestServices } from "./components/main/bestServices/BestServices";
import { Service1 } from "./components/main/service1/Service1";
import { Blog } from "./components/main/blog/Blog";
import { Section1 } from "./components/main/section1/section1";
import { About } from "./components/main/about/About";
import { BeautyServices } from "./components/main/beautyService/beautyService";
import { ReadMore } from "./components/main/readMore/readmore";
import { Subscribe } from "./components/main/subscribe/subscribe";
import { Footer } from "./components/footer/footer";


function Container() {
  
  return (
    <>
    <div
    className="home-bg"
    >
      
      <Header />
      <Hero />
    </div>
      <Section1/>
      <About/>
      <Service1/>
      <BestServices />
      <BeautyServices/>
      <Blog />
      <ReadMore/>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Container;
