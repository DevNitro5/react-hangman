const HEAD = (
  <div
    key="HEAD"
    className="absolute top-[50px] right-[-30px] rounded-full border-gray-700 border-8 w-14 h-14"
  />
);

const BODY = (
  <div
    key="BODY"
    className="w-2 bg-gray-700 absolute -right-1 top-[99px] h-32"
  />
);

const RIGHT_ARM = (
  <div
    key="RIGHT_ARM"
    className="arm rotate-[-30deg] origin-bottom-left right-[-85px]"
  />
);

const LEFT_ARM = (
  <div
    key="LEFT_ARM"
    className="arm origin-bottom-right rotate-[30deg] right-[4px]"
  />
);

const RIGHT_LEG = (
  <div
    key="RIGHT_LEG"
    className="leg -right-[79px] rotate-[60deg] origin-bottom-left"
  />
);

const LEFT_LEG = (
  <div
    key="LEFT_LEG"
    className="leg right-0 rotate-[-57deg] origin-bottom-right"
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="w-2 h-[3.15rem] bg-gray-700 absolute top-0 right-0 " />
      <div className="w-48 h-2 bg-gray-700 ml-[7.5rem]" />
      <div className="w-2 h-72 bg-gray-700 ml-[7.5rem]" />
      <div className="h-2 w-56 bg-gray-700" />
    </div>
  );
}
