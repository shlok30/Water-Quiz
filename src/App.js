import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <h2 className="h-l primary-text-colour center-text padding-s">Quiz App</h2>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
