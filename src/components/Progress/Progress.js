import { useSelector } from "react-redux";
import "./progress.css";
function Progress() {
  const quiz = useSelector((state) => state.quiz);
  const { curIndex, questions, points } = quiz;
  const numQuestions = questions.length;
  const maxPts = questions.reduce((acc, cur) => acc + cur.points, 0);
  const progPercentage = ((curIndex + 1)/numQuestions) * 100;
  return (
    <div className="">
      <div id="prog-bar" className=" rounded-5 position-relative">
        <span
          id="real-prog"
          style={{ width: `${progPercentage}%` }}
          className="h-100 rounded-5 position-absolute start-0 top-0"
        ></span>
      </div>
      <div id="prog-data" className="d-flex justify-content-between py-1">
        <p>
          Question <span className="fw-bold"> {curIndex + 1} </span>/
          {numQuestions}
        </p>
        <p>
          <span className="fw-bold">{points}</span> /{maxPts} Points
        </p>
      </div>
    </div>
  );
}

export default Progress;
