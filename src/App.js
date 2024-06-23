import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdmPage from './pages/AdmPage';
import DocentePage from './pages/DocentePage';
import ApoioPage from './pages/ApoioPage';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdmPage />} />
                <Route path="/docente" element={<DocentePage />} />
                <Route path="/apoio" element={<ApoioPage />} />
            </Routes>
        </Router>
    );
};

export default App;
