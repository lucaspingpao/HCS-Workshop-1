import React from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveLocation(props.location);
        props.setActiveGrade(props.grade);
      }}
      className="timeline-item"
    >
      <h1>{props.title}</h1>
    </div>
  )
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState('School');
  const [activeLocation, setActiveLocation] = React.useState('Place');
  const [activeGrade, setActiveGrade] = React.useState('Grade');

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem
            title="ECFS"
            location="New York City, New York"
            grade="K-2nd"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
          <TimeLineItem
            title="Julia Green"
            location="Nashville, Tennessee"
            grade="2nd"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
          <TimeLineItem
            title="USN"
            location="Nashville, Tennessee"
            grade="3rd-6th"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
          <TimeLineItem
            title="MBA"
            location="Nashville, Tennessee"
            grade="7th, 11th-12th"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
          <TimeLineItem
            title="ISB"
            location="Basel, Switzerland"
            grade="8th-10th"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
          <TimeLineItem
            title="Harvard University"
            location="Cambridge, Massachusetts"
            grade="College '23"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
          <TimeLineItem
            title="Berklee College of Music"
            location="Boston, Massachusetts"
            grade="Graduate School '24"
            setActiveTitle={setActiveTitle}
            setActiveLocation={setActiveLocation}
            setActiveGrade={setActiveGrade}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>School: {activeTitle}</h1>
          <h4>Location: {activeLocation}</h4>
          <h4>Grade: {activeGrade}</h4>
        </div>
      </div>
    </div>
  );
}
