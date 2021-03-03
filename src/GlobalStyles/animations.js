import { keyframes } from "styled-components";

export const zoomIn = keyframes`

0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }

`;

export const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
