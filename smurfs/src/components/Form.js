import React, {useState} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {postData} from '../actions/smurfActions';

const Fform = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 1px black;
width: 60%;
`;

const Input = styled.input`
width: 30%;
margin: 2% 0%;
border: solid 2px black;
`;

const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Form = (props) => {
   
   const [smurf, setSmurf] = useState({
      name: '',
      age: '',
      height: ''
   })

   const handleChange = (e) => {
      setSmurf({
         ...smurf,
         [e.target.name]: e.target.value
      });
      console.log(smurf)
   } 

   const handleSubmit = (e) => {
      e.preventDefault();
      props.postData(smurf);
      setSmurf({
         name: '',
         age: '',
         height: ''
      });
   } 

   return(
      <Flex>
         <Fform onSubmit = {handleSubmit}>

            <label htmlFor = 'name'>Name</label>
            <Input onChange = {handleChange} value = {smurf.name} name = 'name'/>

            <label htmlFor = 'age'>Age</label>
            <Input onChange = {handleChange} value = {smurf.age} name = 'age'/>

            <label htmlFor = 'height'>Height</label>
            <Input onChange = {handleChange} value = {smurf.height} name = 'height'/>

            <button>Submit</button>

         </Fform>
      </Flex>
   )

}

export default connect(null, {postData})(Form)