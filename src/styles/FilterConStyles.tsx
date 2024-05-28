import styled from "styled-components";

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

export const InpCon = styled.div`
  width: 40%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 2px 9px 0px #0000000e;
  background-color: #ffffff;

  & input {
    width: 100%;
    border: none;
    outline: none;
    background-color: #ffffff;
  }

  & input::placeholder {
    color: #848484;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const RegionsCon = styled.div`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  box-shadow: 0px 2px 9px 0px #0000000e;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
