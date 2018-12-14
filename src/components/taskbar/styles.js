import styled from 'styled-components';
import { Container } from '../../styles/globals';

export const Task = styled.div`
  height: 56px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
`;
