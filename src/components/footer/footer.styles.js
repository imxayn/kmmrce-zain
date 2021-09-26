import styled from "@emotion/styled";
import { mq } from "styles/styles";

export const FooterWrapper = styled.div`
  background: ${(props) => props.theme.darkGray};
  padding: ${(props) => props.theme.spaces[6]}px 0;
`;

export const Footer = styled.div`
  display: flex;
  ${mq({ flexDirection: ["column", "row"] })}
  align-items: flex-start;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Nav = styled.div((props) => {
  return mq({
    marginTop: [`${props.theme.spaces[7]}px`, 0],
    marginLeft: [0, `${props.theme.spaces[7]}px`],
    marginRight: [`${props.theme.spaces[5]}px`, `${props.theme.spaces[7]}px`],
  });
});

export const Title = styled.div`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  padding-bottom: ${(props) => props.theme.spaces[3]}px;
`;

export const NavItem = styled.div`
  color: ${(props) => props.theme.gray};
`;
export const Link = styled.a`
  display: block;
  color: ${(props) => props.theme.gray};
  padding-bottom: ${(props) => props.theme.spaces[3]}px;
  text-decoration: none;
`;
