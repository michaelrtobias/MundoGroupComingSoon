import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  text-align: center;
  color: #f6e8ea;
`;

export default function ContactInfo() {
  return (
    <ContactWrapper>
      <h1>In the meantime, please contact us at the following:</h1>
      <h2>(480)-709-7019</h2>
      <h2>TheMundoGroup.com@gmail.com</h2>
    </ContactWrapper>
  );
}
