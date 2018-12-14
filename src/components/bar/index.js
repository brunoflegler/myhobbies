import React from 'react';
import { BarActions, Actions, Action } from './styles';
import { Container } from '../../styles/globals';

const Header = () => (
  <BarActions>
    <Container>
      <Actions>
        <Action active>
          <span>EM DESTAQUE</span>
        </Action>
        <Action>
          <span>NA REGIÃO</span>
        </Action>
        <Action>
          <span>AGENDA</span>
        </Action>
      </Actions>
    </Container>
  </BarActions>
);

export default Header;
