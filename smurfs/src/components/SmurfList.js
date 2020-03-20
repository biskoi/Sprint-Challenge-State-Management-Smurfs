import {Smurf} from './Smurf';
import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const SmurfList = (props) => {
   console.log(props)

   return (
      <Flex>
         {props.data.length ? 
         props.data.map((item, index) => {
         return <Smurf smurf = {item} key = {index}/>
         }) 
         : 'No Smurfs!' }
      </Flex>
   )
}

const mSTP = (state) => {
return {
   data: state.data
}
}

export default connect(mSTP, {})(SmurfList)