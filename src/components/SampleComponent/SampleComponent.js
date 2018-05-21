import React from 'react';
import PropTypes from 'prop-types'
import {Button} from 'primereact/components/button/Button';
import Aux from '../../hoc/Aux';
//Functional Components
const sampleComponent = (props) => {

  return(
    <Aux>
      <p>Sample Component</p>
      <Button  label={props.sampleProp}/>
    </Aux>
  );
}

sampleComponent.propTypes = {
  sampleProp:PropTypes.string
}
export default sampleComponent;
