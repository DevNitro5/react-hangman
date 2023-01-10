import { useState, useEffect } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { KeyBoard } from "./components/KeyBoard";
import words from "./data/wordList.json";

const getWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const numberOfIncorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  ).length;
  const isLoser = numberOfIncorrectGuesses === 6;

  console.log(wordToGuess);
  const isWinner = wordToGuess
    .split("")
    .every((word) => guessedLetters.includes(word));

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const { key } = event;
      // if (!key.match(/^[a-z]$/) || isLoser || isWinner) return;
      if (!key.match(/^[a-z]$/) || isLoser || isWinner) return;
      console.log("hello");
      setGuessedLetters((p) => (p.includes(key) ? p : [...p, key]));
    }

    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keypress", handleKeydown);
  }, []);

  return (
    <div className="mt-7 flex flex-col items-center gap-8 mx-auto">
      <HangmanDrawing numberOfGuesses={numberOfIncorrectGuesses} />
      <HangmanWord
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />
      <button
        onClick={() => {
          setGuessedLetters([]);
          setWordToGuess(getWord());
        }}
        className="my-2 border-4 border-gray-700 px-6 py-1"
      >
        {guessedLetters.length > 0 ? "Restart" : "Next"}
      </button>

      <div style={{ alignSelf: "stretch" }} className="w-[85%] mx-auto">
        <KeyBoard
          disabled={isLoser || isWinner}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
          setGuessedLetters={setGuessedLetters}
        />
      </div>
    </div>
  );
}

export default App;
