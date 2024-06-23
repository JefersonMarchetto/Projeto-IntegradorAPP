import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AdmPage from './pages/AdmPage';
import DocentePage from './pages/DocentePage';
import ApoioPage from './pages/ApoioPage';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin" component={AdmPage} />
                <Route path="/docente" component={DocentePage} />
                <Route path="/apoio" component={ApoioPage} />
            </Switch>
        </Router>
    );
};

export default App;
