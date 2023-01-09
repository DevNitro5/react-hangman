import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { HangmanDrawing } from "./components/HangmanDrawing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-7 flex flex-col items-center gap-8 mx-auto">
      <HangmanDrawing numberOfGuesses={10} />
    </div>
  );
}

export default App;
