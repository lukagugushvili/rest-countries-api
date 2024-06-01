import styled, { keyframes } from "styled-components";
import { ModeType } from "../types/ModePropType";
import { ShowPropType } from "../types/showRegionType";

export const FilterCon = styled.div`
  margin: 3rem 0;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 700px) {
    margin: 2rem 0 3rem 0;
    flex-direction: column;
    gap: 35px;
  }
`;

export const InpCon = styled.div<ModeType>`
  width: 40%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px #0000000e;
  background-color: ${({ $mode }) => ($mode ? "#2B3844" : "#ffffff")};
  transition: background-color 0.3s ease;

  & input {
    width: 100%;
    border: none;
    outline: none;
    color: ${({ $mode }) => ($mode ? "#ffffff" : "#2B3844")};
    background-color: ${({ $mode }) => ($mode ? "#2B3844" : "#ffffff")};
    transition: all 0.3s ease;
  }

  & input::placeholder {
    color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#C4C4C4")};
    transition: color 0.3s ease;
    font-size: 14px;
  }

  svg {
    color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#B2B2B2")};
    transition: color 0.3s ease;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const RegionsCon = styled.div<ModeType & ShowPropType>`
  width: 164px;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  border-radius: ${({ $show }) => ($show ? "5px 5px 0 0" : "5px")};
  box-shadow: 0px 2px 9px 0px #0000000e;
  color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#111517")};
  background-color: ${({ $mode }) => ($mode ? "#2B3844" : "#FFFFFF")};
  transition: all 0.3s ease;

  svg {
    transform: ${({ $show }) => ($show ? "rotate(270deg)" : "rotate(90deg)")};
    transition: transform 0.3s ease;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const RegionsBox = styled.div<ModeType & ShowPropType>`
  width: 164px;
  margin-top: 4px;
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 2px 9px 0px #0000000e;
  color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#111517")};
  background-color: ${({ $mode }) => ($mode ? "#2B3844" : "#FFFFFF")};
  transition: all 0.3s ease;
  position: absolute;
  animation: ${({ $show }) => ($show ? showAnimation : hideAnimation)} 0.3s ease
    forwards;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 7px;

    & p {
      cursor: pointer;
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    & ul {
      font-size: 12px;
    }
  }
`;

const showAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const hideAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
  `;
