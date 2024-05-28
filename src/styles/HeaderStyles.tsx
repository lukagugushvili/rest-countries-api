import styled from "styled-components";

export const HeaderCon = styled.header`
  box-shadow: 0px 2px 4px 0px #0000000e;
  background-color: #ffffff;
`;

export const HeaderBox = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;

  & h1 {
    color: #111517;
  }

  @media (max-width: 700px) {
    & h1 {
      font-size: 14px;
    }
  }
`;

export const ModeBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 600;
    color: #111517;
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
