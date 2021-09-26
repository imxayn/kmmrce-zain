import React, { useCallback, useState } from "react";

import { Navigation, DrawerMenu, Button, Container } from "@kmmrce/components";
import useBreakpoints from "hooks/useBreakpoint";
import * as Styled from "./header.styles";

export const Header = () => {
  const { isDesktop } = useBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Styled.Header>
      <Container>
        <Styled.Wrapper>
          <Styled.Logo src="/images/logo.svg" alt="kMMRCE Logo" />
          {!isDesktop && (
            <Styled.ToggleButtonWrapper onClick={handleClick}>
              <Styled.ToggleButton type="checkbox" />
              <Styled.Bar />
            </Styled.ToggleButtonWrapper>
          )}
          {isDesktop && <Navigation />}
          {isDesktop && <Button variant="primary">Request Demo</Button>}
        </Styled.Wrapper>
        <Styled.Drawer>
          {isOpen && <DrawerMenu isOpen={isOpen} />}
        </Styled.Drawer>
      </Container>
    </Styled.Header>
  );
};

export default Header;
