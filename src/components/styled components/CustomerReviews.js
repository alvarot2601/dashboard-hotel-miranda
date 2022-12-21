import styled, { css } from "styled-components";

export const CustomerReviews = styled.div`
  grid-column: 1/5;
  padding: 30px 30px 70px 30px;
 .customerReviews__title{
    font-size:20px;
    font-weight:600;
    color: #393939;
  }
  p{
    color: #4E4E4E;
  }
  .customerReviews__cardContainer{
    display:flex;
    flex-direction:row;
    align-items:center;
    gap: 40px;
    .arrow-icon{
        padding: 19px 16px;
        background: #135846;
        border-radius: 12px;
        margin-right:-60px;
        color:#FFF;
    }
  }
  .customerReviews__card{
    box-shadow: 0px 16px 30px #00000014;
    border: 1px solid #EBEBEB;
    border-radius: 20px;
    padding:30px;
    p{
       margin-top:0;
       margin-bottom:52px;
    }
    span{
        display:block;
    }
  }
 
  .customerReviews__row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    .customerReviews__user{
        display:flex;
        gap:21px;
        align-items:center;
    }
  }
  .customerReviews__name{
    span:nth-of-type(1){
        color: #262626;
        font-weight:600;
    }
    span:nth-of-type(2){
        color: #799283;
        font-size: 0.875;
    }
}
  .customerReviews__icons{
    display:flex;
    gap: 16px;
    color:#E23428;
    svg:first-child{
      color: #5AD07A;
    }
  }
  svg{
    font-size:1.5rem;
  }
  
`;