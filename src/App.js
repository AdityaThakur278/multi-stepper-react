import { useState } from "react";

import "./App.css";

const Component1 = () => <p>Component - 1</p>;
const Component2 = () => <p>Component - 2</p>;
const Component3 = () => <p>Component - 3</p>;
const Component4 = () => <p>Component - 4</p>;
const Component5 = () => <p>Component - 5</p>;

const List = [Component1, Component2, Component3, Component4, Component5];

function App(props) {
  const [stepIndex, setStepIndex] = useState(0);
  const ComponentToRender = List[stepIndex];
  const stepSize = List.length;
  const stepContainerWidth = stepSize * 30 + (stepSize - 1) * 80;
  const stepLineWidth = stepIndex * 80 + stepIndex * 30;
  const steps = [];

  for (let i = 0; i < stepSize; i++) {
    steps.push(<div className={`step-circle ${i>stepIndex ? "disable-circle" : ""}`}>{i + 1}</div>);
  }

  const handlePreviousClick = () => {
    setStepIndex((currentIndex) => {
      if (currentIndex === 0) return 0;
      return currentIndex - 1;
    });
  };

  const handleNextClick = () => {
    setStepIndex((currentIndex) => {
      if (currentIndex === stepSize - 1) return currentIndex;
      return currentIndex + 1;
    });
  };

  return (
    <div className="app">
      <div
        className="step-container"
        style={{ width: `${stepContainerWidth}px` }}
      >
        <div className="step-sub-container">{steps}</div>
        <div className="line" style={{ width: `${stepLineWidth}px` }} />
      </div>
      <div className="button-container">
        <button onClick={handlePreviousClick} className="button">Previous</button>
        <button onClick={handleNextClick} className="button">Next</button>
      </div>
      <ComponentToRender />
    </div>
  );
}

export default App;
