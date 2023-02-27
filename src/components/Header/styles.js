import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
    
  .input {
    width: 630px;
  }


  button {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  >img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    
    flex-direction: column;
    justify-items: flex-end;
    margin-right: 16px;
    line-height: 24px;
    
    strong {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme}) => theme.COLORS.WHITE};
    }
  }
`;