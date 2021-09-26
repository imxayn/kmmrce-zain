import styled from "@emotion/styled";

const variants = {
  primary: {
    bg: "primary",
    border: "primary",
    color: "white",
    hoverBgColor: "darkenPrimary",
    hoverTextColor: "white",
  },
  outlineDark: {
    bg: "transparent",
    border: "black",
    color: "black",
    hoverBgColor: "black",
    hoverTextColor: "white",
  },
  outlineLight: {
    bg: "transparent",
    border: "white",
    color: "white",
    hoverBgColor: "white",
    hoverTextColor: "black",
  },
};

export const Button = styled.button`
  border: none;
  padding: ${(props) => props.theme.spaces[4]}px
    ${(props) => props.theme.spaces[5]}px;
  color: ${(props) => props.theme[variants[props.variant].color]};
  border: 1px solid ${(props) => props.theme[variants[props.variant].border]};
  background-color: ${(props) => props.theme[variants[props.variant].bg]};
  border-radius: ${(props) => props.theme.radii[5]}px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.theme[variants[props.variant].hoverBgColor]};
    color: ${(props) => props.theme[variants[props.variant].hoverTextColor]};
  }
`;
