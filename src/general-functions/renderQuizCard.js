import QuizCard from "../components/quiz-card";

const renderQuizCard = (quizDB) => quizDB.map(({_id,title,catergoryName}) => <QuizCard key = {_id} title = {title} id = {_id} category = {catergoryName} />) 

export default renderQuizCard