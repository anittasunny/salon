/* istanbul ignore file */
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import "./Container.css";

import { BestServices } from "./components/main/bestServices/BestServices";
import { Service1 } from "./components/main/service1/Service1";
import { Blog } from "./components/main/blog/Blog";
import { Section1 } from "./components/main/section1/section1";

function Container() {
  
  return (
    <>
      <Header />

      <Hero />

      <Section1/>
      <Service1/>
      <BestServices />
      <Blog />
    
    </>
  );
}

export default Container;
