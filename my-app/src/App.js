import React from 'react';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import Workflow from "./components/pages/Workflow/Workflow";
import Projects from "./components/pages/Projects/Projects";
import Raport from "./components/pages/Raport/Raport";
import Inbox from "./components/pages/Inbox/Inbox";
import NotFound from "./components/pages/NotFound";
import AllProject from "./components/pages/Workflow/AllProject";

import LoginLayout from "./components/containers/LoginLayout";
import PrivateLayout from "./components/containers/PrivateLayout";


const App = () =>{
    const BrowserHistory = createBrowserHistory();
    return (
        <Router history={BrowserHistory}>
            <Switch>
                <LoginLayout exact path="/login" component={Login}/>
                <PrivateLayout exact path="/" component={Home} />
                <PrivateLayout exact path="/workflow" component={Workflow} />
                <PrivateLayout exact path="/projects" component={Projects} />
                <PrivateLayout exact path="/raport" component={Raport}/>
                <PrivateLayout exact path="/inbox" component={Inbox}/>
                <PrivateLayout exact peth="/all_project" component={AllProject}/>

                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};
export default App;
