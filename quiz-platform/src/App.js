import './App.css';
import Create from './components/Create';
import Menu from "./components/Menu";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Menu/>}></Route>
            <Route exact path="/CreateQuiz" element={<Create/>}></Route>
        </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
