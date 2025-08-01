import React from "react";

import Home from "./Components/Home";
import Login from "./Components/Login"; // Or adjust the path accordingly
import Registration from "./Registration";
import PropertiesPage from "./PropertiesPage";
import Sallerdasebord from "./Sallerdasebord";
import SellPropertyForm from "./SellPropertyForm";
import RentPropertyForm from "./RentPropertyForm";
import RentFormPage from "./RentFormPage"; // Adjust the path if necessary    


function Master() {
  return (
    <>
      <Home />
      <Login />
      <Registration />
      <PropertiesPage />    
      <Sallerdasebord />
      <SellPropertyForm />
      <RentPropertyForm />
      <RentFormPage />
    </>
  );
}

export default Master;
