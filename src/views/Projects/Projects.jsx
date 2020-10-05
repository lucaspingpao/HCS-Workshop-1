import React from "react";
import Project from "../../components/Project/Project";
import Webscraper from "../../assets/webscraper.png";
import Webscraper2 from "../../assets/webscraper.jpg";
import ReactLogo from "../../assets/react.png";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      Click to view one of my amazing projects!
      <Project 
        title="HCS-Workshop-1: Building a React App"
        link="https://github.com/lucaspingpao"
        source={ReactLogo}
      ></Project>
      <Project 
        title="HCS-Workshop-2: Webscraping"
        link="https://github.com/lucaspingpao"
        source={Webscraper}
      ></Project>
      <Project 
        title="HCS-Workshop-3: ???"
        link="https://github.com"
        source={Webscraper2}
      ></Project>
    </div>
  );
}
