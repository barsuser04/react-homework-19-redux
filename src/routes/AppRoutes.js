import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContentPage from "../pages/ContentPage";
import TodoForm from "../components/TodoForm";
import Calculator from "../components/Calculator";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contentPage" element={<ContentPage />}>
          <Route path="todoshka" element={<TodoForm />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
