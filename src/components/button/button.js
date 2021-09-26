import React from "react";

import * as Styled from "./button.styles";

export const Button = ({ variant, children, ...rest }) => (
  <Styled.Button variant={variant} {...rest}>
    {children}
  </Styled.Button>
);

export default Button;
