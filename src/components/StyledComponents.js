import React from 'react';
import styled, { css } from 'styled-components'
export const Table = styled.table`
    width:100%;
    margin-top:35px;
    border-spacing: 10px;
    color:#393939;
    border-collapse: separate;
    border-spacing: 0px 0px;
    text-align:left;
    font-weight:400;
    svg:hover{
        cursor:pointer;
    }
    .table{
        &__bookingId, &__roomNumber{
            font-weight:600;
            color: #799283;
        }
        &__inline{
            display: inline;
          }
        &__inactive{
            color:#E23428;
        }
        &__active{
            color:#5AD07A;
        }
    }
    
    tr{
        border-bottom: 1px solid #F5F5F5 ;
    }
    
    th,td{
        padding:21px 0px;
    }
    th{
        border-bottom: 1pt solid #F5F5F5 ;
        font-weight:600;
    }
    td{
      max-width:250px;
      vertical-align:top;
      border-bottom: 1pt solid #F5F5F5;
    }
    td.flex{
        display:flex;
        align-items:center;
        gap:16px;
    }
    td:nth-of-type(1), th:nth-of-type(1){
        padding-left:10px;
    }
    td:nth-of-type(8), td:nth-of-type(9){
        padding-right:10px;
    }
    span{
        display:block;
    } 
`;







/*const Link = styled.a`
    font-size:18px;
    letter-spacing: 0px;
    color: #799283;
`;*/





export const Calendar = styled.div`
  height: 400px;
`;



export const ReservationStats = styled.div`
  height: 400px;
  grid-column: 3/5;
`;
