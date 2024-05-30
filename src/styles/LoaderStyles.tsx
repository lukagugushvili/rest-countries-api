import styled from "styled-components";

export const LoaderBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg:nth-child(1) {
    width: 100px;
    height: 100px;
  }

  & p {
    margin-top: 10px;
    font-size: 25px;
    color: #333;
  }
`;
