// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import PropertiesPage from "./Components/PropertiesPage";
import Sallerdasebord from "./Components/Sallerdasebord";
import SellPropertyForm from "./Components/SellPropertyForm";
import RentPropertyForm from "./Components/RentPropertyForm";
import RentFormPage from "./Components/RentFormPage"; // Adjust the path if necessary



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/propertiespage" element={<PropertiesPage />} />
        <Route path="/sallerdasebord" element={<Sallerdasebord />} />
        <Route path="/sellpropertyform" element={<SellPropertyForm />} />
        <Route path="/rentpropertyform" element={<RentPropertyForm />} />
        <Route path="/rentformpage" element={<RentFormPage />} />
        {/* Add more routes as needed */}
    
        
      </Routes>
    </Router>
  );
}

export default App;


