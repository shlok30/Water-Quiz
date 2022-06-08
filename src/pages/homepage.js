import { useQuiz } from "../context/quiz-context"
import renderQuizCard from "../general-functions/renderQuizCard"

const Homepage = () => {
    const {quizDB} = useQuiz()
    console.log(quizDB)
    return(
        <>
            <div className={`container center-block flex gap-xl justify-center light-border m3-top`} style = {{width: "50%"}}>
                {renderQuizCard(quizDB)}
            </div>
        </>
    )
}

export default Homepage