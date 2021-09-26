import React from "react";

import * as Styled from "./section.styles";

export const Section = ({ title, subtitle, desc, children, alignLeft }) => {
  return (
    <Styled.Section alignLeft={alignLeft}>
      {title && <Styled.Title alignLeft={alignLeft}>{title}</Styled.Title>}
      {desc && <Styled.Desc>{desc}</Styled.Desc>}
      {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      {children}
    </Styled.Section>
  );
};

export default Section;
