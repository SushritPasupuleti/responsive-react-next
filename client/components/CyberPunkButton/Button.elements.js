import styled from 'styled-components';

export const ParentButton = styled.button`
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;

  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  background-color: var(--yellow-color);
  color: var(--black-color);
  cursor: pointer;
  padding: 20px 25px;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
`