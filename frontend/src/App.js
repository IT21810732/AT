import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
       
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
