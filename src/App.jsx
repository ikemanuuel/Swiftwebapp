import React from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
