import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  const refreshClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setInterval(refreshClock, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Current Time : {time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
