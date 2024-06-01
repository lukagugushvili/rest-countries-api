import styled from "styled-components";
import { ModeType } from "../types/ModePropType";

export const Wrapper = styled.div<ModeType>`
  background-color: ${({ $mode }) => ($mode ? "#202C36" : "#fafafa")};
  transition: background-color 0.3s ease;
`;
