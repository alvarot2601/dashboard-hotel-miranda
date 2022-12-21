import styled, { css } from 'styled-components'

export const UserImage = styled.div`
    ${props =>{
        if(props.w_70)
        {
            return `
                width:70px;
                height:70px;
            `;
        }
        else if(props.w_150){
            return `
                width:150px;
                height:77px;
            `;
        }
        else if(props.w_88){
            return `
                width:88px;
                height:88px;
            `;
        }
        else if(props.w_156){
          return `
              width:156px;
              height:156px;
          `;
      }
        else{
            return `
                width:57px;
                height:57px;
            `;
        }
    }}
    
    background: #C5C5C5;
    border-radius: 8px;
`;
