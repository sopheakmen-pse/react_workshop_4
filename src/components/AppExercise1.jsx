import { useEffect, useState } from "react";

function App() {
  // Step 1: Create a state named themeColor to store the current mode (dark or light)

  useEffect(() => {
    // Step 2: When the component is first loaded, set the whole theme color to as the default themeColor state's value
    // Hint 1: document.body.style.backgroundColor
    // Hint 2: document.body.style.color
  }, []);

  // Step 4: Create a function that takes 1 argument named value
  // In function => Step 5: Set the themeColor state to the value argument
  // In function => Step 6: Use if else condition to apply the theme color
  //   - Hint 1: document.body.style.backgroundColor
  //   - Hint 2: document.body.style.color

  return (
    <div className="container">
      <h1>React</h1>
      {/* Step 3: Show themeColor's value to the interface. (Hint: use curly bracket to put the value) */}
      <div>Theme Color: Dark</div>
      <div>
        {/* Step 7: use onClick prop of these buttons and bind it to the function in Step 4 */}
        {/* onClick={() => yourfunction("dark/light")} */}
        <button>Dark</button>
        <button>Light</button>
      </div>
    </div>
  );
}

export default App;
