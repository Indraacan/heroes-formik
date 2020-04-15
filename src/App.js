import React from 'react';
import { Container } from 'react-bootstrap';
import Form from './component/form'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/Navbar'
import Index from './component/index'
import './App.css';



function App() {
  return (
    <Router>
       <Container>
        <Navbar/>
    <Switch>
    <Route path="/form">
            <Form/>
        </Route>
        <Route path="/">
            <Index/>
          </Route>
    </Switch>
    </Container>
    </Router>
    

  );
}

export default App;