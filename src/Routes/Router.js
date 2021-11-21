import React from 'react';
import { Switch, Route } from 'react-router';
import Journey from '../Pages/Journey';
import Landing from '../Pages/Landing'
const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/journey" component={Journey} />
            </Switch>
        </>
    );
}
 
export default Routes;