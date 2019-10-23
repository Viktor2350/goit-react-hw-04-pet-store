import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import PetPage from '../../pages/PetPage/PetPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
