import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import { useEffect } from "react";
import Start from "./Start";
import Qustion from "./Question/Qustion";
import Finish from "./Finish/Finish";
import Progress from "./Progress/Progress";
import "./quiz.css"
function Quiz() {
  const quiz = useSelector((state) => state.quiz);
  const { questions, curIndex,timer } = quiz;
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadQuestions());
  }, [dispatch]);
  return (
    <div id="quiz-container" className="p-3 text-center vh-100 vw-100">
      <Header />
      {/* {quiz.status === "loading" && <h4 className="my-3">Loading...</h4>}
      {quiz.status === "error" && <h4 className="my-3">Error</h4>} */}
      {quiz.status === "ready" && <Start />}
      {quiz.status === "start"&&timer>0 && (
        <div id="data-container" className="col-11 col-sm-8 col-md-7 col-xl-6 mt-5 mx-auto">
          {" "}
          <Progress />
          <Qustion key={questions[curIndex]["question"]} />
        </div>
      )}
      {(quiz.status === "finish"||timer===0) && <Finish />}
    </div>
  );
}

export default Quiz;
