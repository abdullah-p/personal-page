import './App.css';
import Header from './Header'
import CV from './CV'
import Home from './Home'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route exact path="/" element={<Header/>}> 
          <Route index element={<Home/>} />
          <Route path="CV" element={<CV/>}/>

        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
