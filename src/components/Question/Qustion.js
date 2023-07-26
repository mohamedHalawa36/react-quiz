import { useEffect, useState } from "react";
import Option from "../option/Option";
import Btn from "../Btn";
import { useDispatch, useSelector } from "react-redux";
import {
  finish,
  nextQusetion,
  reduceTimer,
} from "../../Store/Slices/quizSlice";

function Qustion() {
  const quiz = useSelector((state) => state.quiz);
  const { questions, curIndex, timer } = quiz;
  const curQuestion = questions[curIndex];
  const { question, options, correctOption, points } = curQuestion;
  const [answered, setAnswerd] = useState(false);
  const isLast = curIndex + 1 === questions.length;
  const dispatch = useDispatch();
  const min = Math.floor(timer / 60)
  const seconds = Math.ceil(timer % 60)
  function nextHandler() {
    if (!isLast) dispatch(nextQusetion());
    else dispatch(finish());
  }
  useEffect(() => {
    const time = setInterval(() => {
      dispatch(reduceTimer());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [dispatch]);
  return (
    <div className="p-3 px-0 text-center ">
      <h4 className="mb-4"> {question} </h4>
      <div id="options-container" className="px-2 ">
        {options.map((opt, index) => {
          return (
            <Option
              key={`${question}_${opt}`}
              points={points}
              answered={answered}
              setAnswerd={setAnswerd}
              index={index}
              correctAnswer={correctOption}
            >
              {opt}
            </Option>
          );
        })}
        <div
          id="timer_btn_container"
          className=" d-flex justify-content-between my-4"
        >
          <Btn className={`timer-btn`} disabled={true}>
            {min>=10?min:`0${min}`} : {seconds>=10?seconds:`0${seconds}`}
          </Btn>
          {answered && (
            <Btn clickHandler={nextHandler} className={``}>
              {isLast ? "Finish" : "Next"}
            </Btn>
          )}
        </div>
      </div>
    </div>
  );
}

export default Qustion;
