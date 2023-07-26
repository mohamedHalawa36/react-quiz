import { useDispatch, useSelector } from "react-redux"
import Btn from "./Btn"
import { start } from "../Store/Slices/quizSlice"

function Start() {
    const quiz = useSelector(state=>state.quiz)
    const numQusetions = quiz?.questions?.length
    const dispatch = useDispatch();
    function startHandler(){
        dispatch(start())
    }
    return (
        <div id="start-section" className="my-4 text-center">
            <p className="welcome display-5">Welcome to the React Quiz !</p>
            <p>{numQusetions} questions to test your react mastrey</p>
            <Btn className={``} clickHandler={startHandler} >
                Let's start!
            </Btn>
        </div>
    )
}

export default Start
