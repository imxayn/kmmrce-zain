import NAVIGATION_MOCK from "components/navigation/navigation.mock";
import React from "react";

import * as Styled from "./drawer-menu.styles";

const drawerMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0 },
};

const navVariantion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const DrawerMenu = ({ isOpen }) => (
  <Styled.DrawerMenu
    variants={drawerMenuVariants}
    initial={{ x: "100%" }}
    animate={isOpen ? "show" : "hidden"}
    transition={{ duration: 0.5 }}
  >
    {console.log("isOpen", isOpen)}
    <Styled.List variants={navVariantion} initial="hidden" animate="show">
      {NAVIGATION_MOCK.navItems.map(({ title }) => (
        <Styled.Item variants={itemVariation}>{title}</Styled.Item>
      ))}
    </Styled.List>
  </Styled.DrawerMenu>
);

export default DrawerMenu;
