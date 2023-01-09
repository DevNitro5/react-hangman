interface HangmanWordProps {
  wordToGuess: string;
  reveal: boolean;
  guessedLetters: string[];
}

export function HangmanWord(props: HangmanWordProps) {
  const { guessedLetters, reveal, wordToGuess } = props;
  const show = (letter: string) => guessedLetters.includes(letter) || reveal;

  return (
    <div className="flex gap-[0.25em] text-5xl lg:text-7xl font-semibold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-[.1em] border-gray-700" key={index + letter}>
          <span
            style={{
              visibility: show(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "green",
            }}
          >
            {show(letter) ? letter : "0"}
          </span>
        </span>
      ))}
    </div>
  );
}
