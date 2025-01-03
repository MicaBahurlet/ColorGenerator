import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 250px;
  right: 50px;
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #005959;
    transform: scale(1.1);
  }

  svg {
    font-size: 20px;
  }
`;
