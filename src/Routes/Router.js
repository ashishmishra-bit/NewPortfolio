import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../Pages/Landing'
const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </>
    );
}
 
export default Routes;