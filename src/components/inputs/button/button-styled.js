import styled from 'styled-components';

const themes = {
  blue: {
    backgroundColor: '#21367d',
    backgroundColorHover: '#224ab1',
  },
  green: {
    backgroundColor: '#3a9362',
    backgroundColorHover: '#319c76',
  },
  red: {
    backgroundColor: '#bd6473',
    backgroundColorHover: '#ff9aa9',
  },
  'dark-green': {
    backgroundColor: '#225a1f',
    backgroundColorHover: '#00653a',
  },
  'dark-red': {
    backgroundColor: '#6d1121',
    backgroundColorHover: '#92152b',
  },
  disabled: {
    backgroundColor: '#384237',
    backgroundColorHover: '#384237',
    color: '#ababab',
  },
};

const ButtonStyled = styled.button`
  width: 100%;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-variant: all-petite-caps;
  font-weight: 600;
  font-family: Arial;
  cursor: pointer;
  border: none;
  border-bottom-left-radius: ${({ theme: { group = {} } }) => (group.bottom === group.left) && '5px'};
  border-bottom-right-radius: ${({ theme: { group = {} } }) => (group.bottom === group.right) && '5px'};
  border-top-left-radius: ${({ theme: { group = {} } }) => (group.top === group.left) && '5px'};
  border-top-right-radius: ${({ theme: { group = {} } }) => (group.top === group.right) && '5px'};
  background-color: ${({ theme: { name } }) => themes[name].backgroundColor};
  margin: ${({ theme: { margin } }) => margin || ''};
  color: ${({ theme: { color } }) => color || 'white'};

  :hover {
    background-color: ${p => themes[p.theme.name].backgroundColorHover};
  }
`;

export default ButtonStyled;
