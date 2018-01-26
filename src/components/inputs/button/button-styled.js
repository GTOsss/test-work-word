import styled from 'styled-components';

const themes = {
  blue: {
    backgroundColor: '#21367d',
    backgroundColorHover: '#2d63e7',
  },
  green: {
    backgroundColor: '#3a9362',
    backgroundColorHover: '#3ab68b',
  },
  red: {
    backgroundColor: '#bd6473',
    backgroundColorHover: '#ff9aa9',
  },
};

const ButtonStyled = styled.button`
  width: 100%;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-family: Arial;
  cursor: pointer;
  color: white;
  border: none;
  border-bottom-left-radius: ${p => (p.theme.group.bottom === p.theme.group.left) && '5px'};
  border-bottom-right-radius: ${p => (p.theme.group.bottom === p.theme.group.right) && '5px'};
  border-top-left-radius: ${p => (p.theme.group.top === p.theme.group.left) && '5px'};
  border-top-right-radius: ${p => (p.theme.group.top === p.theme.group.right) && '5px'};
  background-color: ${p => themes[p.theme.name].backgroundColor};

  :hover {
    background-color: ${p => themes[p.theme.name].backgroundColorHover};
  }
`;

export default ButtonStyled;
