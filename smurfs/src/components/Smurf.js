import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: solid black 1px;
width: 25%;
`;

export const Smurf = (props) => {


   return (

      <Card>
         <p>ID: {props.smurf.id}</p>
         <p>Name: {props.smurf.name}</p>
         <p>Height: {props.smurf.height}</p>
         <p>age: {props.smurf.age}</p>
      </Card>

   )

}