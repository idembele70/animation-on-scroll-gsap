import React from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const spin = keyframes`
from {
  transform:rotate(0);
}
to {
  transform:rotate(360deg);
}
`;
const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
`;
const Loader = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;
