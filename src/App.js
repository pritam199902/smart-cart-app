import "./App.css";
import { useState } from "react";
import Navbar from "./COMPONENTS/products/navbar";
import Main from "./Main";

import NetStatus from "./InternetError";

// animation
import { fadeInDown, rubberBand, lightSpeedIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

function App() {
  const [status, setStatus] = useState(true);
// TODO: eneble it
  // const [status, setStatus] = useState(navigator.onLine);


  const isOn =()=>{
    return navigator.onLine
  }

  // TODO: eneble it
  // useState(() => {
  //   if (isOn()) {
  //     setStatus(navigator.onLine);
  //     console.log(navigator.onLine);
  //   } else {
  //     setStatus(navigator.onLine);
  //     console.log("0000000000");
  //   }
  // });

  return (
    <div>
      {status ? (
        <div>
          <Navbar />
          <Main />
        </div>
      ) : (
        <NetStatus />
      )}
    </div>
  );
}

// animation
const animation = StyleSheet.create({
  anm1: {
    animationName: fadeInDown,
    animationDuration: "2s",
  },
  anm2: {
    animationName: rubberBand,
    animationDuration: "2.6s",
  },
  anm3: {
    animationName: lightSpeedIn,
    animationDuration: "1.5s",
  },
});

export default App;
