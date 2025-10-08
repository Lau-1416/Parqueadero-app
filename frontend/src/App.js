import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ingreso from './pages/Ingreso';
import Salida from './pages/Salida';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/ingreso">Ingreso</Link>
          <Link to="/salida">Salida</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/ingreso" element={<Ingreso />} />
            <Route path="/salida" element={<Salida />} />
            <Route path="*" element={<Ingreso />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;