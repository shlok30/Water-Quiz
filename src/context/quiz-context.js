import { createContext, useContext, useEffect, useState } from "react";
import { quizzes } from "../db/quizes";

const QuizContext = createContext()

const QuizContextProvider = ({children}) => {

    const [quizDB, setQuizDB] = useState([...quizzes])

    const [selectedCategory,setSelectedCategory] = useState("")

    const [answerList, setAnswerList] = useState([])

    const [questionIndex, setQuestionIndex] = useState(0)

    useEffect(() => {
        const initialAnswerList = quizDB.reduce((acc,curr) => [...acc,{quizID : curr["_id"], answers : []}],[])
        setAnswerList([...initialAnswerList])
    },[])

    return(
        <QuizContext.Provider value = {{quizDB,selectedCategory,answerList,questionIndex,setSelectedCategory,setAnswerList,setQuestionIndex}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export {QuizContextProvider,useQuiz}