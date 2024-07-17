import { useEffect, useState } from "react";

function App() {
  // Step 1: Create a state named themeColor to store the current mode (dark or light)
  // const [themeColor, setThemeColor] = useState("dark");
  let themeColor = "dark";

  useEffect(() => {
    // Step 2: When the component is first loaded, set the whole theme color to as the default themeColor state's value
    // Hint 1: document.body.style.backgroundColor
    // Hint 2: document.body.style.color

    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#ffffff";
  }, []);

  // Step 4: Create a function that takes 1 argument named value
  const changeAppThemeColor = (value) => {
    // Step 5: Set the themeColor state to the value argument
    // setThemeColor(value);
    themeColor = value;

    // Step 6: Use if else condition to apply the theme color
    // Hint 1: document.body.style.backgroundColor
    // Hint 2: document.body.style.color
    if (value === "light") {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#333333";
    } else {
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "#ffffff";
    }
  };

  return (
    <div className="container">
      <h1>React</h1>
      {/* Step 3: Show themeColor's value to the interface. (Hint: use curly bracket to put the value) */}
      <div>Theme Color: {themeColor}</div>
      <div>
        {/* Step 7: use onClick prop of these buttons and bind it to the function in Step 4 */}
        {/* onClick={() => yourfunction("dark/light")} */}
        <button onClick={() => changeAppThemeColor("dark")}>Dark</button>
        <button onClick={() => changeAppThemeColor("light")}>Light</button>
      </div>
    </div>
  );
}

export default App;
