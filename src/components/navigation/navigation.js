import React from "react";
import Link from "next/link";
import NAVIGATION_MOCK from "./navigation.mock";
import * as Styled from "./navigation.styles";

export const Navigation = () => {
  return (
    <Styled.Navigation>
      <Styled.List>
        {NAVIGATION_MOCK.navItems.map(({ title, url }) => (
          <Link href={`${url}`}>
              <Styled.Item>{title}</Styled.Item>
          </Link>
        ))}
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
