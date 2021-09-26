import styled from "@emotion/styled";
import { mq } from "styles/styles";
import { motion } from "framer-motion";

export const CaseStudy = styled.div`
  display: flex;
  align-items: flex-end;
  ${mq({ flexDirection: ["column", "row"] })}
  overflow: hidden;
`;
export const Wrapper = styled.div((props) => {
  return mq({
    flex: "1 1 0",
    order: [1, 0, 0],
    padding: [`${props.theme.spaces[6]}px} `, 0],
  });
});

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  padding-bottom: ${(props) => props.theme.spaces[3]}px;
`;
export const Subtitle = styled.h3`
  ${mq({ maxWidth: ["100%", "70%"] })};
  font-size: ${(props) => props.theme.fontSizes[7]}px;
`;
export const Desc = styled.span`
  display: inline-block;
  ${mq({ maxWidth: ["100%", "70%"] })};
  font-size: ${(props) => props.theme.fontSizes[6]}px;
  padding: ${(props) => props.theme.spaces[7]}px 0;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  & > button {
    margin-right: ${(props) => props.theme.spaces[3]}px;
  }
`;
export const ImgWrapper = styled.div`
  flex: 1 1 0;
  ${mq({ order: [0, 1, 1] })}
`;
export const Img = styled(motion.img)`
  max-width: 100%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
