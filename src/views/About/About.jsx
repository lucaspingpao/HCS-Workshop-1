import React from "react";
import "./About.css";
import CutePic from "../../assets/Lucas_Pao.JPG";

function FunFact(props) {
  return (
    <div
      onClick={() => {
        props.setActiveInfo(props.fact);
      }}
      className="timeline-item"
    >
      <h1>Fun Fact #{props.number}</h1>
    </div>
  )
}

export default function AboutScreen() {
  const [activeInfo, setActiveInfo] = React.useState('');
  
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture"/>
        </div>
        <div className="intro-item">
          <br/>
          <h3>My name is Lucas Pao and I like coding yay</h3>
        </div>
      </div>
      <div>
        <FunFact
          number="1"
          fact="I like react yay"
          setActiveInfo={setActiveInfo}
        >
        </FunFact>
        <FunFact
          number="2"
          fact="I also like music yay"
          setActiveInfo={setActiveInfo}
        >
        </FunFact>
        <h3>Fun fact: {activeInfo}</h3>
      </div>
    </div>
  );
}
