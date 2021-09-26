import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const DrawerMenu = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 300px;
  background-color: ${(props) => props.theme.secondary};
  padding: 0 ${(props) => props.theme.spaces[5]}px;
`;

export const List = styled(motion.ul)`
  padding-top: ${(props) => props.theme.spaces[7]}px;
`;
export const Item = styled(motion.li)`
  list-style: none;
  padding-bottom: ${(props) => props.theme.spaces[4]}px;
  font-size: ${(props) => props.theme.fontSizes[4]}px;
  color: ${(props) => props.theme.white};
`;
