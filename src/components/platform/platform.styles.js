import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { mq } from "styles/styles";

export const Platform = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${mq({ height: ["auto", "100vh"] })}
  background: ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.white};
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 100px;
`;

export const Img = styled(motion.img)`
  opacity: 0.5;
  max-width: 600px;
`;
