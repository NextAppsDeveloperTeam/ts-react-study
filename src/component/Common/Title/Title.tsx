import React from "react";
import {TitleProps as Props} from './Title.types';
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 50px 0 30px 0;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: bold;
`;


const Title : React.FC<Props> = ({text}) => {
  return (
    <Container className='Title'>
      <Text>{text}</Text>
    </Container>
  );
};

Title.displayName = 'Header';
export default Title;
