import React, { useState } from "react";
import "./style.css";
const App = () => {
  const [value, setValue] = useState();
  const [type, setType] = useState("isPrime");

  const onChangeInput = (e) => {
    if (e.target.value && e.target.value < 1) {
      setValue(1);
    } else {
      setValue(parseInt(e.target.value));
    }
  };

  const onChangeSelect = (e) => setType(e.target.value);

  const checkCondition = () => {
    let result = false;
    if (type === "isPrime") {
      const number = parseInt(value);
      if (number === 1) {
        result = false;
      } else if (number > 1) {
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            result = false;
            break;
          } else {
            result = true;
            break;
          }
        }
      }
    } else {
      result = isFibonacci(value)
    }
    return `${result}`;
  }

  const isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return s * s === x;
  }
 
  const isFibonacci = (n) => isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)

  return (
    <div className="container">
      <div className="first">
        <input
          type="number"
          placeholder="calculator"
          onChange={onChangeInput}
          value={value}
        />
      </div>
      <div className="second">
        <select name="type" id="type" onChange={onChangeSelect}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="third">{checkCondition()}</div>
    </div>
  );
};

export default App;
