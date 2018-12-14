import styled, { css } from 'styled-components';
import { Container } from '../../styles/globals';

export const BarActions = styled.div`
  display: flex;
  height: 46px;
  width: 100%;
  background: #3d4cb9;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.25);

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

export const Actions = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
`;

export const Action = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  height: 100%;

  span {
    font-size: 14px;
    color: #fff;

    &:after {
      ${props => props.active
        && css`
          content: '';
          height: 2px;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #fff;
        `};
    }
  }
`;
