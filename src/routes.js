import React from 'react';
import { Route } from 'react-router-dom';


import SampleComponent from './components/SampleComponent/SampleComponent';
import SampleRoute from './components/SampleRoute/SampleRoute';

const mainRoute =  (
    <div>
      <Route exact path="/" component={SampleComponent}/>
      <Route exact path="/sample_route" component={SampleRoute}/>
    </div>
);


export {
  mainRoute,
}
