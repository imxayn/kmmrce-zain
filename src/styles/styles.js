import React from "react";
import { Global, css } from "@emotion/react";
import normalize from "./normalize";
import facepaint from "facepaint";

export const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

export const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${normalize}
        @font-face {
          font-family: "yellixregular";
          src: url("/fonts/yellix/yellix-regular.woff2") format("woff2"),
            url("/fonts/yellix/yellix-regular.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "akkurat-monoregular";
          src: url("/fonts/akkurat-mono/akkurat-mono.woff2") format("woff2"),
            url("/fonts/akkurat-mono/akkurat-mono.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }
        body {
          font-family: "yellixregular", sans-serif;
          color: #333;
        }
      `}
    />
  </>
);
