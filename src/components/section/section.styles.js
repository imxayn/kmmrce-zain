import styled from "@emotion/styled";
import { mq } from "styles/styles";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignLeft ? "flex-start" : "center")};
  padding: ${(props) => props.theme.spaces[8]}px 0;
`;

export const Title = styled.h2`
  width: 100%;
  font-weight: 300;
  font-family: "akkurat-monoregular";
  text-align: ${(props) => (props.alignLeft ? "left" : "center")};
  font-size: ${(props) => props.theme.fontSizes[5]}px;
`;

export const Subtitle = styled.h3((props) => {
  return mq({
    fontSize: [
      `${props.theme.fontSizes[5]}px`,
      `${props.theme.fontSizes[6]}px`,
    ],
    paddingBottom: [`${props.theme.spaces[7]}px`],
    maxWidth: ["100%", "60%"],
  });
});

export const Desc = styled.span((props) => {
  return mq({
    display: "inline-block",
    fontSize: [
      `${props.theme.fontSizes[5]}px`,
      `${props.theme.fontSizes[7]}px`,
    ],
    padding: [`${props.theme.spaces[6]}px 0`],
    maxWidth: ["100%", "60%"],
  });
});
