import { useDispatch, useSelector } from "react-redux";
import Btn from "../Btn";
import { ready, resetState } from "../../Store/Slices/quizSlice";

function Finish() {
  const quiz = useSelector((state) => state.quiz);
  const { points, maxPts, questions } = quiz;
  const maxPoints = maxPts(questions);
  const dispatch = useDispatch();
  function restartHandler() {
    dispatch(resetState());
    dispatch(ready());
  }
  return (
    <>
      <h5
        id="finish-section"
        className="py-3 px-2 rounded-5 col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 mx-auto my-5"
      >
        {} You scored {points} out of {maxPoints} (
        {Math.ceil((points / maxPoints) * 100)}%)
      </h5>
      <Btn clickHandler={restartHandler}>Restart Quiz !</Btn>
    </>
  );
}

export default Finish;
