import styled, { css } from 'styled-components'
export const Sidebar = styled.aside`
    width:17.96%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 55px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 13px 3px 40px #00000005;
    position:absolute;
    top:0;
    &.close{
      display:none;
    }
    a{
        font-weight:600;
        font-size:18px;
        color: #799283;
        text-decoration:none;
    }
    .linksContainer{
        min-height:65px;
        width:100%;
        display:flex;
        align-items:center;
        gap:16px;
        svg{
            font-size:27px;
            margin-left:56px;

        }
    }
    .linksContainer:hover{
        border-left:8px solid #E23428;
        border-radius: 0px 6px 6px 0px;
        *{
            color:#E23428;
        }
    }

`;

export const UserCard = styled.div`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    max-width:233px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    padding:0px 40px 25px 40px;
    .userCard{
      &__name{
        text-align: center;
        font-weight:500;
        letter-spacing: 0px;
        color: #393939;
      }
      &__mail{
        font-size:12px;
        letter-spacing: 0px;
        color: #B2B2B2;
      }
    }
`;