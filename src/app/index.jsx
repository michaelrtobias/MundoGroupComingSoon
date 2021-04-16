import React, { useEffect, useState } from "react";
import ComingSoon from "../comingSoon/index.jsx";
import styled from "styled-components";
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #000306;
`;

const Title = styled.div`
  text-align: center;
  color: #f6e8ea;
`;

const TMGTitle = styled.div`
  font-size: 60px;
`;
function App() {
  return (
    <AppWrapper>
      <Title>
        <TMGTitle>The Mundo Group</TMGTitle>
      </Title>
      <ComingSoon />
    </AppWrapper>
  );
}

export default App;
