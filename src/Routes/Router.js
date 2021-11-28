import React, { useState } from 'react';
import { Switch, Route } from 'react-router';


import Blogs from '../Pages/Blogs';
import Journey from '../Pages/Journey';
import Landing from '../Pages/Landing'
import Projects from '../Pages/Projects';
import SeePost from '../Pages/SeePost';
import SeePost2 from '../Pages/SeePost2'
import SeePost3 from '../Pages/SeePost3'
import Achievements from '../Pages/Achievements';





const Routes = () => {
    return (
        <>
           
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/journey" component={Journey} />
                <Route exact path="/achievements" component={Achievements} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blogs/how-to-store-sessions-in-mongo-db-using-express.Js" component={SeePost} />
                <Route exact path="/blogs/transfer-learning-with-tensorflow" component={SeePost2} />
                <Route exact path="/blogs/sentiment-analysis-using-deep-learning" component={SeePost3} />
            </Switch>
        </>
    );
}

export default Routes;