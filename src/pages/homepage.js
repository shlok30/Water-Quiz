import { useQuiz } from "../context/quiz-context"
import renderQuizCard from "../general-functions/renderQuizCard"

const Homepage = () => {
    const {quizDB} = useQuiz()
    console.log(quizDB)
    return(
        <>
            <div className={`container center-block grid grid-3-columns gap-l light-border m3-top`}>
                {renderQuizCard(quizDB)}
            </div>
        </>
    )
}

export default Homepage