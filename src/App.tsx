import { useState } from "react";
import { BsFillCalculatorFill } from "react-icons/Bs";

function App() {
  const [mass, setMass] = useState(180);
  const [height, setHeight] = useState(1.7);
  const BMI = Number(mass / (height ^ 2));

  function setBMIResult(): string {
    let BMIRESULT = "";
    if (BMI < 18.5) {
      BMIRESULT = "underweight";
    } else if (BMI < 25) {
      BMIRESULT = "normal";
    } else if (BMI < 30) {
      BMIRESULT = "overweight";
    } else if (BMI < 40) {
      BMIRESULT = "obesity";
    } else if (BMI >= 40) {
      BMIRESULT = "Tank";
    }
    return BMIRESULT;
  }

  return (
    <div className="App">
      <div className="header">
        <BsFillCalculatorFill fontSize="2rem" />

        <h1>Body Mass Index Calculator</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          veniam earum sint repellat optio laborum a voluptatem nesciunt, modi
          doloremque quisquam quasi quaerat amet culpa quos? Mollitia, excepturi
          voluptatibus. Reiciendis?
        </p>
      </div>
      <form>
        <h2>Enter your details below</h2>
        <label htmlFor="metric">
          <input type="radio" id="metric" name="system" />
          Metric
        </label>
        <label htmlFor="imperial">
          <input type="radio" id="imperial" name="system" />
          Imperial
        </label>

        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          id="height"
          placeholder="cm"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="kg"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
        />
      </form>
      <div className="result">
        <p>
          Your BMI is <span>{BMI}</span>
        </p>
        `Your BMI suggests you're a {setBMIResult()} weight`
      </div>
    </div>
  );
}

export default App;
