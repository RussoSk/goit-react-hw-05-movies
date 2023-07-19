import React from "react";
import Header from "./Header/Header";

import { Route, Routes } from "react-router-dom";


 const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>} />
    </Routes>
    
  );
};
export default App;