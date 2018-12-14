import styled from 'styled-components';

export const Events = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Event = styled.li`
  flex: 1;
  padding: 20px;
  display: flex;
  background: #fff;
  border-radius: 4px;

  img {
    width: 130px;
    height: 90px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 17px;

    strong {
      font-size: 14px;
      color: #575757;
    }

    span {
      font-size: 12px;
      color: #7d7d7d;
      margin-top: 7px;
    }

    small {
      font-size: 12px;
      color: #7d7d7d;
      margin-top: 5px;
    }
  }
`;
