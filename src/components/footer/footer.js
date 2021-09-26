import React from "react";

import { Container } from "@kmmrce/components";
import * as Styled from "./footer.styles";
import FOOTER_MOCK from "./footer.mock";

export const Footer = () => (
  <Styled.FooterWrapper>
    <Container>
      <Styled.Footer>
        <Styled.Logo src="/images/icon-logo.svg" alt="KMMRCE logo" />
        <Styled.Wrapper>
          {FOOTER_MOCK.footerItems.map(({ title, footerLinks }) => (
            <Styled.Nav key={title}>
              <Styled.Title>{title}</Styled.Title>
              <Styled.NavItem>
                {footerLinks.map(({ title, url }) => (
                  <Styled.Link href={url} key={title}>
                    {title}
                  </Styled.Link>
                ))}
              </Styled.NavItem>
            </Styled.Nav>
          ))}
        </Styled.Wrapper>
      </Styled.Footer>
    </Container>
  </Styled.FooterWrapper>
);

export default Footer;
