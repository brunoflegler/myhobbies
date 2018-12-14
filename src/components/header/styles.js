import styled from 'styled-components';
import { Container } from '../../styles/globals';
import search from '../../styles/assets/search.svg';

export const HeaderMain = styled.header`
  height: 56px;
  background: #3d4cb9;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const Search = styled.input`
  width: 500px;
  border: 1px solid #1e2966;
  height: 40px;
  padding: 0 12px 0 30px;
  border-radius: 16px;
  color: #fff;
  font-size: 14px;
  background: #1e2966 url(${search}) no-repeat 10px center;
`;
