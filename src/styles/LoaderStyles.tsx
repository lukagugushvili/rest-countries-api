import styled from "styled-components";

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  animation: myLoader 1s ease-in-out infinite;

  @keyframes myLoader {
    0% {
      opacity: 0;
      font-size: -5px;
    }
    25% {
      opacity: 0.3;
      font-size: 5px;
      color: #dc2626;
    }
    50% {
      opacity: 0.5;
      font-size: 10px;
      color: #0e7490;
    }
    75% {
      opacity: 0.8;
      font-size: 20px;
    }
    100% {
      opacity: 1;
      font-size: 30px;
      color: #86efac;
    }
  }
`;
