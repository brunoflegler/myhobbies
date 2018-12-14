import React from 'react';
import { HeaderMain, Search } from './styles';
import { Container } from '../../styles/globals';

const Header = () => (
  <HeaderMain>
    <Container>
      <Search placeholder="Encontre seu evento..." />
    </Container>
  </HeaderMain>
);

export default Header;
