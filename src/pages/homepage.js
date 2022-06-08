import { useQuiz } from "../context/quiz-context"
import renderQuizCard from "../general-functions/renderQuizCard"

const Homepage = () => {
    const {quizDB,selectedCategory,setSelectedCategory} = useQuiz()
    const filteredQuizes = selectedCategory ? quizDB.filter((quiz) => quiz.catergoryName === selectedCategory) : [...quizDB]
    return(
        <>
            <div className="container center-block m-xl-top" style = {{width: "50%"}}>
                <div className="flex space-between">
                    <p className={`cursor-pointer w-30 center-text ${!selectedCategory ? "active-category" : ""}`} onClick = {() => setSelectedCategory("")}>All</p>
                    <p className={`cursor-pointer w-30 center-text ${selectedCategory === "Marvel" ? "active-category" : ""}`} onClick = {(e) => setSelectedCategory(e.target.innerText)}>Marvel</p>
                    <p className={`cursor-pointer w-30 center-text ${selectedCategory === "DC" ? "active-category" : ""}`} onClick = {(e) => setSelectedCategory(e.target.innerText)}>DC</p>
                </div>
                <div className="flex gap-xl justify-center m3-top">
                    {renderQuizCard(filteredQuizes)}
                </div>
            </div>
        </>
    )
}

export default Homepage