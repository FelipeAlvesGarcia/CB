import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home.js';
import Feedback from './components/Feedback.js';
import CB from './components/CB.js';
import Lixos from './components/Lixos.js';

function App() {
  return (
    <div className="App body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clean-beach" element={<CB />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/lixos" element={<Lixos />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;