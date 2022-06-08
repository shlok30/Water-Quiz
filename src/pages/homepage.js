import { useQuiz } from "../context/quiz-context"
import renderQuizCard from "../general-functions/renderQuizCard"

const Homepage = () => {
    const {quizDB} = useQuiz()
    console.log(quizDB)
    return(
        <>
            <div className="container center-block light-border m3-top" style = {{width: "50%"}}>
                <div className="flex space-between">
                    <p className="cursor-pointer active-category w-30 center-text">All</p>
                    <p className="cursor-pointer border w-30 center-text">Marvel</p>
                    <p className="cursor-pointer border w-30 center-text">DC</p>
                </div>
                <div className="flex gap-xl justify-center m3-top">
                    {renderQuizCard(quizDB)}
                </div>
            </div>
        </>
    )
}

export default Homepage