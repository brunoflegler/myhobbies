import React from 'react';
import { Events, Event } from './styles';
import { Container } from '../../styles/globals';

const ListEvents = () => (
  <Container>
    <Events>
      <Event>
        <img
          src="https://www.folhape.com.br/obj/147/306051,475,80,0,0,475,365,0,0,0,0.jpg"
          alt="avatar"
        />
        <div>
          <strong>FESTA DO APÊ - LATINO Villa Bohemia Club</strong>
          <span>2 de setembro - 22:48</span>
          <small>Itapuã, Vila Velha/ES</small>
        </div>
      </Event>
      <Event>
        <img
          src="https://www.folhape.com.br/obj/147/306051,475,80,0,0,475,365,0,0,0,0.jpg"
          alt="avatar"
        />
        <div>
          <strong>FESTA DO APÊ - LATINO Villa Bohemia Club</strong>
          <span>2 de setembro - 22:48</span>
          <small>Itapuã, Vila Velha/ES</small>
        </div>
      </Event>
    </Events>
  </Container>
);

export default ListEvents;
