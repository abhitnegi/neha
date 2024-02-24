import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Final from './Final';
import Sure from './Sure';
import Last from './Last';

function App() {
  return (
    <div className="App">
      <Router basename='/neha'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/final' element={<Final />}/>
          <Route path='/sure' element={<Sure />}/>
          <Route path='/last' element={<Last />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
