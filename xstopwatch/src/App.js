// import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [start, setStart] = useState("Start");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState("00");
  const [reset, setReset] = useState(true);
  const [intervalID, setIntervalID] = useState(null);
  //var interval = setInterval(StartTimer, 1000);

  useEffect(() => {
    var now = new Date().getTime();
    let interval = null;
    // console.log(reset);
    if (!reset) {
      interval = setInterval(() => {
      // console.log(interval);
      setIntervalID(interval)

        var curr = new Date().getTime();
        var distance = curr - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) setSec("0" + seconds);
        else setSec(seconds);
        setMin(minutes);
      }, 1000);
    } else {
      // console.log(interval);
      clearInterval(intervalID);
    }
  }, [start, reset]);
  function Reset() {
    setStart("Start");
    setReset(true);
    setMin(0);
    setSec("00")
  }
  function StartTimer() {
    if (start == "Start") {
      setStart("Stop");
      setReset(false);
    } else {
      setStart("Start");
      setReset(true);
      setMin(0);
    setSec("00")
    }
  }
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>
        Time: {min}:{sec}
      </p>
      <button onClick={StartTimer}>{start}</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
