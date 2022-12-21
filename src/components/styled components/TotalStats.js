import styled, { css } from "styled-components";

export const TotalStats = styled.div`
  padding: 29px 30px 35px 42px;
  display: flex;
  flex-direction: column;
  grid-column: 3/5;
  .totalStats__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    span:nth-of-type(1) {
      font-size: 28px;
      font-weight: 600;
      color: #393939;
    }
    span:nth-of-type(2) {
      color: #6e6e6e;
    }
  }
  .totalStats__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .totalStats__row2 {
    margin-left: 11px;
    p:nth-of-type(1) {
      font-size: 1.25rem;
      font-weight: 600;
      color: #135846;
    }
    p:nth-of-type(2) {
      font-size: 0.75rem;
      color: #6e6e6e;
    }
  }
`;