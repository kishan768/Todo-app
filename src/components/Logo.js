import React from "react";
import { styled } from "styled-components";

const Logo = () => {
  return (
    <Wrapper className="container text-center my-3 text-secondary ">
      <h3>📑todo list🧾</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

export default Logo;
