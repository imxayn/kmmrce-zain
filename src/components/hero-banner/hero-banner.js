import React from "react";

import { Button, Container } from "@kmmrce/components";
import * as Styled from "./hero-banner.styles";

export const HeroBanner = () => (
  <Container>
    <Styled.HeroBanner>
      <Styled.Wrapper>
        <Styled.Title>
          <span>KMMRCE</span> is an enterprise level digital platform that
          provides a turnkey solution to online retailing.
        </Styled.Title>
        <Button variant="primary">Request Demo</Button>
      </Styled.Wrapper>
      <Styled.ImgWrapper>
        <Styled.Img src="/images/hero-image.png" alt="hero image" />
      </Styled.ImgWrapper>
    </Styled.HeroBanner>
  </Container>
);

export default HeroBanner;
