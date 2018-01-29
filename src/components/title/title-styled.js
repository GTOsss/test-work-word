import styled from 'styled-components';

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  padding: 1rem 0;
  box-shadow: 0 0 15px black inset;
  margin: 0;
`;

export default Title;
