
const calculateScore = (answerList,quizID) => {
    
    if(answerList.find(quiz => quiz.quizID === quizID).answers.length > 0){
        let sum = 0
        let answersOfCurrentQuizList
        answersOfCurrentQuizList = answerList.find(quiz => quiz.quizID === quizID).answers
        sum = answersOfCurrentQuizList.reduce((sum,curr) => curr.isAnswerCorrect ? sum + 5 : sum,0)
        return sum
    }
    else{
        return 0
    }
}

export default calculateScore