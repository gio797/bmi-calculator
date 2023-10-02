import { useState } from "react";

function App() {
  const [mass, setMass] = useState(70);
  const [height, setHeight] = useState(1.7);
  const BMI = (mass / (height ^ 2)).toFixed(2);
  console.log(BMI);

  return (
    <div className="App">
      <form>
        <h2>Enter your details below</h2>
        <input type="radio" placeholder="Metric" />
        <input type="radio" placeholder="imperial" />
        <label htmlFor="height">Height</label>
        <input type="number" name="height" id="height" placeholder="cm" />
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" id="weight" placeholder="kg" />
      </form>
      <div className="result">
        <p>Your BMI is {BMI}</p>
      </div>
    </div>
  );
}

export default App;
