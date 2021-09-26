import React from "react";
import useInView from "react-cool-inview";

import { Button, Container, Section } from "@kmmrce/components";
import * as Styled from "./platform.styles";
import useBreakpoints from "hooks/useBreakpoint";

export const Platform = () => {
  const { isDesktop } = useBreakpoints();
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  const backgroundVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 0.5 },
  };

  return (
    <Styled.Platform ref={observe}>
      {inView && isDesktop && (
        <Styled.Background
          variants={backgroundVariants}
          initial="hidden"
          animate="show"
        >
          <Styled.Img variants={imageVariants} src="/images/img-1.png" />
          <Styled.Img variants={imageVariants} src="/images/img-2.png" />
          <Styled.Img variants={imageVariants} src="/images/img-3.png" />
          <Styled.Img variants={imageVariants} src="/images/img-6.png" />
          <Styled.Img variants={imageVariants} src="/images/img-5.png" />
          <Styled.Img variants={imageVariants} src="/images/img-4.png" />
        </Styled.Background>
      )}
      <Container>
        <Styled.Wrapper>
          <Section
            title="Platform"
            desc="Sell digital or physical inventory, with configurable or simple
          attributes, in a way that suits your business."
          >
            <Button variant="outlineLight">Explore the Platform</Button>
          </Section>
        </Styled.Wrapper>
      </Container>
    </Styled.Platform>
  );
};

export default Platform;
