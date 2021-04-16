import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ComingSoonImg = styled.img`
  max-width: 100vw;
`;
function ComingSoon(props) {
  return (
    <div>
      <ComingSoonImg
        src="https://s3.amazonaws.com/themundogroup.com/Untitled-design-2019-10-29T153346.079.jpg"
        alt="coming-soon-picture"
      ></ComingSoonImg>
    </div>
  );
}

export default ComingSoon;
