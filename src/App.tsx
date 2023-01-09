import { useState } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { KeyBoard } from "./components/KeyBoard";
import words from "./data/wordList.json";

const getWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([
    ...wordToGuess.split("").slice(2),
    "z",
  ]);

  const isLoser =
    guessedLetters.length === 6 && guessedLetters.join("") === wordToGuess;

  const isWinner = true;

  // console.log(isLoser,guessedLetters.length);

  return (
    <div className="mt-7 flex flex-col items-center gap-8 mx-auto">
      <HangmanDrawing numberOfGuesses={10} />
      <HangmanWord
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />

      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          // disabled={isWinner || isLoser}
          disabled={false}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
          setGuessedLetters={setGuessedLetters}
        />
      </div>
      <button
        onClick={() => {
          setGuessedLetters((p) => [...p, "1"]);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;

// activeLetters={guessedLetters.filter((letter) =>
//   wordToGuess.includes(letter)
// )}
// inactiveLetters={incorrectLetters}
// addGuessedLetter={addGuessedLetter}
