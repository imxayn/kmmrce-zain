import styled from "@emotion/styled";
import { mq } from "styles/styles";

export const Feedback = styled.div`
  background: ${(props) => props.theme.primary};
  padding: ${(props) => props.theme.spaces[8]}px 0;
  color: ${(props) => props.theme.black};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const quotes = styled.span((props) => {
  return mq({
    fontWeight: 400,
    fontSize: [
      `${props.theme.fontSizes[5]}px`,
      `${props.theme.fontSizes[7]}px`,
    ],
  });
});
export const Text = styled.h3((props) => {
  return mq({
    maxWidth: ["100%", "70%"],
    textAlign: "center",
    fontWeight: 400,
    fontSize: [
      `${props.theme.fontSizes[5]}px`,
      `${props.theme.fontSizes[7]}px`,
    ],
  });
});

export const Img = styled.img`
  width: 150px;
`;
export const FeedbackBy = styled.span((props) => {
  return mq({
    fontWeight: 400,
    fontSize: [
      `${props.theme.fontSizes[1]}px`,
      `${props.theme.fontSizes[6]}px`,
    ],
  });
});
