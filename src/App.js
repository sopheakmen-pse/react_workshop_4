import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState("dark");

  useEffect(() => {
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#ffffff";
  }, []);

  const changeAppThemeColor = (value) => {
    if (value === "light") {
      setThemeColor("ligth");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#333333";
    } else {
      setThemeColor("dark");
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "#ffffff";
    }
  };

  return (
    <div className="container">
      <h1>React</h1>
      <div>Theme Color: {themeColor}</div>
      <div>
        <button onClick={() => changeAppThemeColor("dark")}>Dark</button>
        <button onClick={() => changeAppThemeColor("light")}>Light</button>
      </div>
    </div>
  );
}

export default App;
