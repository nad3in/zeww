import React, { Component } from 'react';
import MainNavLayout from '../AppLayout/MainNavLayout';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import Signup from '../AppLayout/signup/Signup'
import LandingPage from '../AppLayout/Landingpage/LandingPage';
import Workspace from '../AppLayout/workspace/Workspace';

class Routing extends Component {
    render () {
        return (
            <Router>
                <Workspace/>
{/*             
                <MainNavLayout path="/" component={LandingPage}exact/>
                <MainNavLayout path="/signup" component={Signup}/> */}
           
            </Router>
        )
    }
}

export default Routing