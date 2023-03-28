import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import pallete from "./pallete";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      body {
        font-family: "SUIT Variable", sans-serif;
        background: ${pallete.gray};
      }

      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
