import { useQuiz } from "../context/quiz-context"
import { useParams } from "react-router-dom"
import renderOptions from "../general-functions/renderOptions"
import calculateScore from "../general-functions/calculateScore"

const ResultPage = () => {

    const {quizDB,answerList} = useQuiz()

    const {quizID} = useParams()

    const currentQuizObject = quizDB.find(quiz => quiz["_id"] === quizID)

    console.log("current quiz object",currentQuizObject)

    return(
        <>
            <div className="container center-block padding-s m6-top half-width">
                <h1 className="primary-colour-text">{currentQuizObject.title}</h1>
                <p className="m3-top">Score : {calculateScore(answerList,quizID)}/15</p>
                {currentQuizObject.mcqs.map((quiz,index) => {
                    return(
                        <>
                            <div className="m3-top">
                                <p className="text-l">{quiz.question}</p>
                                <div className="flex flex-column gap-s m3-top">
                                    {renderOptions(currentQuizObject,quiz.options,index)}
                                </div>
                            </div>
                        </>
                    )
                    
                })}
            </div>
        </>
    )
}

export default ResultPage