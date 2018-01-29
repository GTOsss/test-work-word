import React from 'react';
import { TitleStyled } from 'components/title';

const Title = TitleStyled.extend`
  font-size: 1rem;
  color: white;
  background-color: #004e22;
`;

const Home = () => (
  <Title>
    Это SPA приложение на React с использованием
    react-redux (thunk), styled-component, react-router.
    <br />
    Для хранения данных использует localStorage.
    <br />
    Перевод осуществляется с использованием Яндекс api.
  </Title>
);

export default Home;
