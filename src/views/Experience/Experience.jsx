import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
      className="timeline-item"
    >
      <h1>{props.title}</h1>
    </div>
  )
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState('Click on one of my experiences!');
  const [activeDescription, setActiveDescription] = React.useState('');

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Roller Coaster Tester"
            description="This was super cool!"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem
            title="Camp counselor"
            description="This was super fun!"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem
            title="Ice cream guy"
            description="This was super tasty!"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <h4>{activeDescription}</h4>
        </div>
      </div>
    </div>
  );
}
