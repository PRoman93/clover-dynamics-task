import React from 'react';
import './App.css';
import Selected from "./SelectedPage/Selected";
import ImagesPage from "./ImagesPage/ImagesPage";
import {Route, Switch} from "react-router-dom";

function App() {

    return (
        <div className='App'>
            <Switch>
                <Route exact path={'/'} component={Selected}/>
                <Route path={'/clover-dynamics-task'} component={Selected}/>
                <Route exact path={'/selected'} component={Selected}/>
                <Route path={'/images/:rover/'} render={(routerProps) => <ImagesPage routerProps={routerProps}/>}/>
                <Route path={'/images/'} render={(routerProps) => <ImagesPage routerProps={routerProps}/>}/>
            </Switch>

        </div>
    );
}

export default App;
