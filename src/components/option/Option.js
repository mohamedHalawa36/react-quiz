import { useState } from "react";
import Btn from "../Btn";
import { useDispatch } from "react-redux";
import { addPoints } from "../../Store/Slices/quizSlice";
function Option({
  answered,
  setAnswerd,
  index,
  points,
  correctAnswer,
  children,
}) {
  const [clicked,setClicked] = useState(false);
  const dispatch = useDispatch();
  const correct = index === correctAnswer;
  function optionHandler() {
    setClicked(true);
    setAnswerd(true);
    correct && dispatch(addPoints(points));
  }
  return (
    <Btn
      clickHandler={optionHandler}
      disabled={answered}
      className={`option ${clicked?"answer":""} w-100 text-start px-4 ${
        !answered ? "" : correct ? "bg-success" : "bg-danger"
      }  p-2 d-block w-50`}
    >
      {children}
    </Btn>
  );
}

export default Option;
