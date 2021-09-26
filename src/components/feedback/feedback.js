import React, { useRef } from "react";

import { Container } from "@kmmrce/components";
import * as Styled from "./feedback.styles";

export const Feedback = () => {
  return (
    <Styled.Feedback>
      <Container>
        <Styled.Wrapper>
          <Styled.quotes>“</Styled.quotes>
          <Styled.Text>
            KMMRCE is an ideal solution for anyone looking to build a bespoke
            e-commerce website. A great foundation has been designed to get you
            started on a fully-fledged storefront with minimal effort.
          </Styled.Text>
          <Styled.quotes>“</Styled.quotes>
          <Styled.Img src="/images/feedback-image.png" alt="feedback image" />
          <Styled.FeedbackBy>
            Tyler Hilderband, Head of Engineering at patch
          </Styled.FeedbackBy>
        </Styled.Wrapper>
      </Container>
    </Styled.Feedback>
  );
};

export default Feedback;
