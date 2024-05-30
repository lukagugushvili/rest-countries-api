import styled from "styled-components";

export const CardsWrapper = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 50px;
`;

export const Card = styled.div`
  cursor: pointer;
  max-height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 0px 7px 2px #00000008;
  background-color: #ffffff;

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

export const Details = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    padding: 15px 0 10px 0;
    font-size: 18px;
  }

  & h3 {
    font-size: 14px;
    font-weight: 600;

    & span {
      font-size: 14px;
      font-weight: 300;
      padding-left: 10px;
    }
  }
`;
