import React from "react";
import OurServices from "../components/OurServices";

import Info1 from "../components/Info1";
import LandingSection from "../components/LandingSection";
import Info2 from "../components/Info2";
import Testimonial from "../components/Testimonial";
import ArticleCard from "../components/ArticleCard";
export default function Home(props) {
  return (
    <div>
      <title>{props.title}</title>
      <LandingSection />
      <OurServices />
      <Info1 />
      <Info2 />
      <Testimonial />
      <ArticleCard />
    </div>
  );
}
