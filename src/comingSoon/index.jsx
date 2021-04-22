import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ComingSoonImg = styled.img`
  max-width: 100vw;
  max-height: 60vh;
  box-shadow: 0 0 16px 16px #000306 inset;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
function ComingSoon(props) {
  return (
    <Wrapper>
      <ComingSoonImg
        src="./Untitled-design-2019-10-29T153346.079.jpg"
        alt="coming-soon-picture"
      ></ComingSoonImg>
    </Wrapper>
  );
}

export default ComingSoon;
