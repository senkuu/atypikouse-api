import React from "react";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;

function Offers() {
  return (
    <Wrapper>
      <h1>Offers</h1>
    </Wrapper>
  );
}

export default Offers;
