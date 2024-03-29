import { GiHoleLadder } from "react-icons/gi";

export const QuestionType1 = ({instruction,action}) => {
  const textQuestion =
  instruction.textQuestion;
  const placeHolder =
  instruction.placeHolder;
  const typeInput =
  instruction.typeInput;
  const questionValue =
  instruction.questionValue;
  return (
    <>
      <label className="font-bold text-white mt-4">
        {textQuestion}
      </label>
      <input
        placeholder={placeHolder}
        className="border-2 mt-1 rounded-lg p-1 outline-none"
        type={typeInput}
        value={questionValue}
        onChange={(event) =>
        action(event.target.value)}
      />
    </>
  );
};
