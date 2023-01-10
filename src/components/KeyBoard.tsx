interface KeyBoardProps {
  disabled: boolean;
  guessedLetters: string[];
  wordToGuess: string;
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
}

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export function KeyBoard(props: KeyBoardProps) {
  const { disabled, wordToGuess, guessedLetters, setGuessedLetters } = props;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-2">
      {KEYS.map((key) => {
        const wordToGuessIncludes = wordToGuess.includes(key);
        const guessedLettersIncludes = guessedLetters.includes(key);
        const isActive = wordToGuessIncludes && guessedLettersIncludes;
        const isInactive = guessedLettersIncludes && !wordToGuessIncludes;

        return (
          <button
            onClick={() => {
              if (disabled) return;
              setGuessedLetters((p) => [...p, key]);
            }}
            className={`btn${isActive ? " active" : ""}${
              isInactive ? " inactive" : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
