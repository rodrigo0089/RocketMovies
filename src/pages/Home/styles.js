import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) =>theme.COLORS.BACKGROUND_700};
 
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 48px 106px 0 ;
    
    > button {
      width: 207px;
    }
    > h1 {
      font-size: 32px;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div`
    padding: 0 64px;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
