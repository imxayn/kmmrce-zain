import React from "react";
import useInView from "react-cool-inview";

import { WHY_KMMRCE_MOCK } from "./why-kmmrce.mock";
import * as Styled from "./why-kmmrce.styles";

export const WhyKmmrce = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "100px",
  });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Styled.WhyKMMRCE ref={observe}>
      <Styled.ImgWrapper>
        {inView && (
          <Styled.Img
            src="/images/why.svg"
            alt="why KMMRCE"
            initial="hidden"
            animate="visible"
            variants={variants}
          />
        )}
      </Styled.ImgWrapper>
      <Styled.Wrapper>
        <Styled.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos
          eum veritatis quia odio delectus!
        </Styled.Title>
        {WHY_KMMRCE_MOCK.map(({ title, desc, features }) => (
          <Styled.Feature>
            <Styled.Subtitle>{title}</Styled.Subtitle>
            <Styled.Desc>{desc}</Styled.Desc>
            {features && (
              <Styled.List>
                {features.map(({ title }) => (
                  <>
                    <Styled.Item>
                      <Styled.Icon src="/images/tick.svg" alt={title} /> {title}
                    </Styled.Item>
                  </>
                ))}
              </Styled.List>
            )}
          </Styled.Feature>
        ))}
      </Styled.Wrapper>
    </Styled.WhyKMMRCE>
  );
};

export default WhyKmmrce;
