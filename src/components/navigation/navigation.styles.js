import styled from "@emotion/styled";

export const Navigation = styled.nav``;
export const List = styled.ul``;
export const Item = styled.li`
  position: relative;
  display: inline-block;
  margin-right: ${(props) => props.theme.spaces[7]}px;
  font-size: ${(props) => props.theme.fontSizes[6]}px;
  color: ${(props) => props.theme.black};
  padding-bottom: ${(props) => props.theme.spaces[3]}px;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    margin: auto;
    height: 2px;
    background-color: ${(props) => props.theme.secondary};
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;
