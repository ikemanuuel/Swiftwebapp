import React from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cashdashboard from './Pages/Cashierpage/Cashdashboard';
import OrderRequest from './Pages/screens/OrderRequest';
import RentalRequest from './Pages/screens/Rentalrequest';
import Rental from './Pages/screens/Rental';
import Order from './Pages/screens/Order';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/cashdashboard/*" element={<Cashdashboard />} />
            <Route path="/orderrequest/*" element={<OrderRequest />} />
            <Route path="/rentalrequest/*" element={<RentalRequest />} />
            <Route path="/order/*" element={<Order/>} />
            <Route path="/rental/*" element={<Rental/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
