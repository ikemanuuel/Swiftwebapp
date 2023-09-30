import React from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
