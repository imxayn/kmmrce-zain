import styled from "@emotion/styled";
import { mq } from "styles/styles";
import { motion } from "framer-motion";
import { Section } from "../section/section.styles";

export const WhyKMMRCE = styled(Section)`
  flex-direction: row;
  ${mq({ flexDirection: ["column", "row"] })}
`;
export const ImgWrapper = styled.div`
  text-align: center;
  flex: 1 1 0;
`;
export const Img = styled(motion.img)`
  ${mq({ maxWidth: ["100%", "60%"] })}
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Wrapper = styled.div((props) => {
  return mq({
    flex: "1 1 0",
    paddingLeft: [`${props.theme.spaces[6]}px`, "0"],
    paddingRight: [`${props.theme.spaces[6]}px`, "0"],
  });
});

export const Feature = styled.div`
  margin-bottom: ${(props) => props.theme.spaces[5]}px;
`;

export const Title = styled.h2((props) => {
  return mq({
    maxWidth: ["100%", "80%"],
    fontSize: [
      `${props.theme.fontSizes[5]}px}`,
      `${props.theme.fontSizes[7]}px}`,
    ],
    fontWeight: 300,
    marginBottom: [`${props.theme.spaces[5]}px`],
  });
});
export const Subtitle = styled.h3`
  margin-bottom: ${(props) => props.theme.spaces[3]}px;
`;
export const Desc = styled.span``;
export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  list-style: none;
  margin-bottom: ${(props) => props.theme.spaces[3]}px;
`;
export const Icon = styled.img`
  margin-right: ${(props) => props.theme.spaces[3]}px;
`;
