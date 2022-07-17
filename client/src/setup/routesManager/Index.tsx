import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HomePage } from '../../pages/HomePage/Index';
import { AboutPage } from '../../pages/AboutPage/Index';

const RoutesManager:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export { RoutesManager };