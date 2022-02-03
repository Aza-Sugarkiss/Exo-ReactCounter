import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
library.add(faCalculator);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header />
      <div className="middle">
        <div className="counter">
          {counter > 0 && (
            <button onClick={() => setCounter(counter - 1)}>-</button>
          )}
          <p>{counter}</p>
          {counter < 10 && (
            <button onClick={() => setCounter(counter + 1)}>+</button>
          )}
        </div>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
