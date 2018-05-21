import React from 'react';
import { Route, Switch } from 'react-router-dom';


import SampleComponent from './components/SampleComponent/SampleComponent';
import SampleRoute from './components/SampleRoute/SampleRoute';

const mainRoute =  (
    <div>
      <Switch>
        <Route exact path="/" component={SampleComponent}/>
        <Route exact path="/sample_route" component={SampleRoute}/>
        <Route exact path="/:paramsId" component={SampleComponent}/>
      </Switch>

    </div>
);


export {
  mainRoute,
}
