import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';


const Main = props => {
    <Switch>
        <Route exact path='/' component={Series} />
        <Route exact path="/s/:id" component={SingleSeries} />

    </Switch>
}

export default Main;