import styled, { css } from "styled-components";

export const KpiContainer = styled.div`
padding: 30px;
display: flex;
flex-direction: row;
align-items: center;
gap: 22px;
:hover{
    .kpi-icon-container{
        color:white;
        background:#E23428;
    }
}
span {
  display: block;
}
span:nth-of-type(1) {
  font-size: 1.875rem;
  font-weight: 600;
  color: #393939;
}
span:nth-of-type(2) {
  font-size: 0.875rem;
  font-weight: 300;
  color: #787878;
  margin-top: 4px;
}
.kpi-icon-container {
  background: #ffedec;
  border-radius: 8px;
  padding: 20px;
  width:65px;
  height:65px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.5rem;
  color:#E23428;
}
`;