import buttonColour from "../general-functions/buttonColour"
import { useParams } from "react-router-dom"
import { useQuiz } from "../context/quiz-context"

const Options = ({currentQuizObject,option,index}) => {

    console.log(currentQuizObject)

    const {answerList,setAnswerList,questionIndex} = useQuiz()

    const questionID = currentQuizObject.mcqs[index >= 0 ? index : questionIndex]["_id"]

    const correctAnswer = currentQuizObject.mcqs[index >= 0 ? index : questionIndex].answer

    const {quizID} = useParams()

    const selectedAnswerObject = answerList.find(quiz => quiz.quizID === quizID)

    const answersOfCurrentQuestion = [...selectedAnswerObject.answers]
    
    const currentAnswer = answersOfCurrentQuestion?.reduce((answer,curr) => curr.questionID === questionID ? curr.answer : answer,"")

    const handleClick = () => {
        //console.log(currentQuiz)
        const currentAnswerObject = {questionID , answer : option, isAnswerCorrect : correctAnswer === option ? true : false}
        const updatedAnswerList = answerList.map(quiz => quiz.quizID === quizID ? {...quiz , answers : [...quiz.answers,{...currentAnswerObject}]} : {...quiz})
        setAnswerList([...updatedAnswerList])
    }

    return(
        <button className= {`btn full-width circular-btn ${currentAnswer ? buttonColour(currentAnswer,correctAnswer,option) : "btn-primary"}`} onClick={handleClick} disabled = {currentAnswer ? true : false}>{option}</button>
    )
}

export default Options