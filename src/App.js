import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Home from "./component/Home";

function App() {
  return (    
    <div>
      <Container>
        <Home />
      </Container>
    </div>
    
  );
}

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0px auto;
  max-width: 400px;
  padding: 0vh 16px;
  padding-top: 10px;
`;

export default App;
