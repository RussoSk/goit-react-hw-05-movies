import React from "react";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UsersPage";
import ErorPage from "./pages/ErorPage";

import { Route, Routes } from "react-router-dom";


 const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<HomePage/>} />
      <Route path="user" element={<UserPage/>} />
      </Route>
      <Route path="*" element={<ErorPage/>} />
    </Routes>
    
  );
};
export default App;