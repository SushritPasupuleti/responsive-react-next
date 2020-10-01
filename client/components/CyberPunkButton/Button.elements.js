import styled from 'styled-components';

export const ParentButton = styled.button`
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;

  margin: 1rem;
  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  background-color: var(--black-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
`

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
`

export const ButtonLabel = styled.span`
  height: 10px;
  font-size: .40rem;
  position: absolute;
  bottom: -4px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
`

export const GlitchFx = styled.span`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--yellow-color);
  filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
`