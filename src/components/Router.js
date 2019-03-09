import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';

 const Router = () => (
    <BrowserRouter>
      <Switch>
        <Router path="/" component={App} exact />
        <Router path="/recipe" component={Recipe}/>
      </Switch>
    </BrowserRouter>
 );


 export default Router;