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

      * {
        box-sizing: border-box;
      }

      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
        font-family: "SUIT Variable", sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
