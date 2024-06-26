import "./App.scss";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handlSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  let color = "#FFF";
  if (count >= 1) {
    color = "yellow";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <div className="App">
      <section className="counter-sec --flex-center">
        <div className="container counter --card --center-all">
          <h1 className="--text-light">React Counter App</h1>
          <p
            className="count --my2 --text-md --text-light --fw-bold"
            style={{ color: color }}
          >
            {count}
          </p>
          <div className="buttons">
            <button className="--btn --btn-danger" onClick={handlSubtract}>
              {" "}
              - Subtract{" "}
            </button>
            <button className="--btn" onClick={handleReset}>
              {" "}
              ! Reset{" "}
            </button>
            <button className="--btn --btn-success" onClick={handleAdd}>
              {" "}
              + Add{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
