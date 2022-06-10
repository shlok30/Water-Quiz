import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import QuizPage from './pages/quiz-page';
import ResultPage from './pages/result';

function App() {
  return (
    <div className="App">
      <h2 className="h-l primary-text-colour center-text padding-s">Quiz App</h2>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/quiz/:quizID" element = {<QuizPage />} />
        <Route path = "/result/:quizID" element = {<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
