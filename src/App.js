
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/common/screens/Home';
import SignUpForm from './components/User/Signup';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route  path="/signup" element={<SignUpForm/>} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
