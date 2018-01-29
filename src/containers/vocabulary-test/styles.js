import styled from 'styled-components';
import { ButtonStyled } from 'components/inputs/button';

export const CountTitle = styled.div`
  color: white;
  padding: 1rem;
  font-weight: 600;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WrapButtons = styled.div`
  width: 600px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = ButtonStyled.extend`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  text-align: left;
  width: 49%;
`;

export const ButtonNext = Button.extend`
  width: 100%;
  text-align: center;
`;
