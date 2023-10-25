import { createGlobalStyle} from "styled-components";

import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

timer {
  background-color: ${({ theme }) => theme.colors.background};

  font-family: monospace;
  overflow-x: hidden;
}

// theme buttons color
.focus {
  background-color: ${theme.focus.colors.background};
}
.short-break {
  background-color: ${theme.short.colors.background};
}
.long-break {
  background-color: ${theme.long.colors.background};
}
// active theme
.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
    }
`



// Vim motions vi ( 0r " to bring you to everything in between
