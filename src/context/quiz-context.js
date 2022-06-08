import { createContext, useContext, useState } from "react";
import { quizzes } from "../db/quizes";

const QuizContext = createContext()

const QuizContextProvider = ({children}) => {

    const [quizDB, setQuizDB] = useState([...quizzes])

    const [selectedCategory,setSelectedCategory] = useState("")

    return(
        <QuizContext.Provider value = {{quizDB,selectedCategory}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export {QuizContextProvider,useQuiz}