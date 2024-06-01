import styled from "styled-components";
import { ModeType } from "../types/ModePropType";

export const CardsWrapper = styled.div`
  margin: 0 1rem;
  padding-bottom: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 50px;
`;

export const Card = styled.div<ModeType>`
  cursor: pointer;
  max-height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px #00000008;
  background-color: ${({ $mode }) => ($mode ? "#2B3844" : "#FFFFFF")};
  transition: background-color 0.3s ease;

  & img {
    flex: 1;
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0px 0px;
  }

  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

export const Details = styled.div<ModeType>`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    padding: 15px 0 10px 0;
    font-size: 18px;
    color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;
  }

  & h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${({ $mode }) => ($mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;

    & span {
      padding-left: 10px;
      font-size: 14px;
      font-weight: 300;
      font-weight: 600;
      opacity: ${({ $mode }) => ($mode ? "0.7" : "1")};
      transition: opacity 0.3s ease;
    }
  }
`;
