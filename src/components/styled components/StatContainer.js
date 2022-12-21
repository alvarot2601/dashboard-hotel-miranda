import styled, { css } from "styled-components";

export const StatContainer = styled.div`
  color: #ffffff;
  padding: 39px 30px 30px 30px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-of-type(1) {
      font-size: 14px;
    }
    span:nth-of-type(2) {
      font-size: 20px;
      font-weight: 600;
    }
  }
  progress {
    width: 100%;
  }
`;