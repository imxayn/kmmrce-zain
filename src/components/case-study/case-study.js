import React from "react";
import useInView from "react-cool-inview";

import { Button } from "@kmmrce/components";
import * as Styled from "./case-study.styles";

export const CaseStudy = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "100px",
  });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Styled.CaseStudy ref={observe}>
      <Styled.Wrapper>
        <Styled.Title>Case Study</Styled.Title>
        <Styled.Subtitle>Created with KMMRCE: Watch 1010</Styled.Subtitle>
        <Styled.Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi
          ab facilis voluptatem omnis pariatur nihil error, voluptate iste porro
          delectus quaerat ullam non doloremque, at reprehenderit. Ab, cumque
          exercitationem.
        </Styled.Desc>
        <Styled.ButtonsWrapper>
          <Button variant="outlineDark">View Case Study</Button>
          <Button variant="outlineDark">View All</Button>
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
      <Styled.ImgWrapper>
        {inView && (
          <Styled.Img
            initial="hidden"
            animate="visible"
            variants={variants}
            src="/images/case-study.svg"
            alt="case study image"
          />
        )}
      </Styled.ImgWrapper>
    </Styled.CaseStudy>
  );
};

export default CaseStudy;
