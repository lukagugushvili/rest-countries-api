import styled from "styled-components";
import { ModeType } from "../types/ModePropType";

export const HeaderCon = styled.header<ModeType>`
  box-shadow: 0px 2px 4px 0px #0000000e;
  background-color: ${({ $mode }) => ($mode ? "#2B3844" : "#ffffff")};
  transition: background-color 0.3s ease;
`;

export const HeaderBox = styled.div<ModeType>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;

  & h1 {
    color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;
  }

  @media (max-width: 700px) {
    & h1 {
      font-size: 14px;
    }
  }
`;

export const ModeBox = styled.div<ModeType>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 600;
    color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;
  }

  @media (max-width: 700px) {
    & p {
      font-size: 12px;
    }

    svg {
      width: 12px;
    }
  }
`;
