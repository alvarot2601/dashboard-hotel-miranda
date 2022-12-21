import styled, { css } from "styled-components";
export const Button = styled.button`
    padding:13px ${props=> props.viewNotes ? "36px" : "16px"};
    border-radius:12px;
    border:none;
    font-size:1rem;
    font-weight:500;
    width:${props => props.viewNotes ? "auto" : "109px"};
    :hover{
      cursor:pointer;
    }
    ${(props)=>{
        if(props.refund)
        {
            return (
                `
                background-color:#FFEDEC;
                color:#E23428;
                `
            );
        }
        else if(props.booked){
            if(props.red){
                return (
                    `
                    background-color:#E23428 ;
                    color: #FFFFFF;
                    `
                ); 
            }
            return (
                `
                background-color:#E8FFEE;
                color: #5AD07A;
                `
            );
        }
        else if(props.pending){
            return (
                `
                background-color:#E2E2E2;
                color: #6D6D6D;
                `
            );
        }
        else if(props.canceled){
            return (
                `
                background-color:#575757;
                color: #BEBEBE;
                `
            );
        }
        else if(props.viewNotes){
            if(props.outlined)
            {
                return (
                    `
                    background-color:#FFF;
                    border: 1px solid #799283;
                    color: #799283;
                    `
                );
            }
            else{
                return (
                    `
                    color: #212121;
                    background-color:#EEF9F2;
                    `
                );
            }
        }
        else if(props.available){
            return ( 
                `
                color: #FFFFFF;
                background-color:#5AD07A;
                `
            );
        }
        else if(props.archive){
          return ( 
            `
            color: #E23428;
            background:transparent;
            `
        );
        }else if(props.phone){
          return ( 
            `
            border: 1px solid #E8F2EF;
            background:transparent;
            font-size:20px;
            width: 59px;
            height:50px;
            color:#135846;
            margin-right:16px;
            `
        );
        }
        else if(props.sendMessage){
          return ( 
            `
            color: #FFFFFF;
            background:#135846;
            height:50px;
            font-weight:600;
            width:auto;
            display:flex;
            align-items:center;
            gap:23px;
            svg{
              font-size:1.5rem;
            }
            `
        );
        }else if(props.contact_us){
          return (`
            background: #EBF1EF 0% 0% no-repeat padding-box;
            border-radius: 8px;
            font: normal normal 600 14px/21px Poppins;
            letter-spacing: 0px;
            color: #135846;
            padding:14px;
          `);
        }
    }}
`;