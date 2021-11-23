import React from 'react';
import { Switch, Route } from 'react-router';
import Achievements from '../Pages/Achievements';
import Blogs from '../Pages/Blogs';
import Journey from '../Pages/Journey';
import Landing from '../Pages/Landing'
import Projects from '../Pages/Projects';
import SeePost from '../Pages/SeePost';
const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/journey" component={Journey} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/achievements" component={Achievements} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/seeblogs" component={SeePost} />
            </Switch>
        </>
    );
}
 
export default Routes;