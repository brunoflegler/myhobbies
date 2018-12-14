import styled from 'styled-components';
import { Container } from '../../styles/globals';

export const EventItem = styled.div`
  height: 56px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    img {
      width: 182px;
      height: 137px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px;

  strong {
    font-size: 14px;
    color: #575757;
  }

  span {
    font-size: 12px;
    color: #7d7d7d;
    margin-top: 10px;
  }

  small {
    font-size: 12px;
    color: #7d7d7d;
    margin-top: 5px;
  }
`;
