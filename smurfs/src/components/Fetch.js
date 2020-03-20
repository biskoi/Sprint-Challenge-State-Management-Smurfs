import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/smurfActions';

const Fetch = (props) => {

   return (
      <>
      <button type = 'button' onClick = {props.fetchData}>Fetch Smurfs</button>
      </>
   )

}

export default connect(null, {fetchData})(Fetch)