import React, { Component } from 'react';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

import Aux from '../../hoc/Aux';

class sampleRoute extends Component{

  render(){
    return(
      <Aux>
        <TabView>
          <TabPanel header="Tab One"  leftIcon="fa-calendar">
            Tab One
          </TabPanel>
          <TabPanel header="Tab Two"  rightIcon="fa-print">
            Tab Two
          </TabPanel>
          <TabPanel header="Tab Three"  leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
            Tab Three
          </TabPanel>
        </TabView>
      </Aux>
    );
  }

}

export default sampleRoute;
