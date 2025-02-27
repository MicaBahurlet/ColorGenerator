
import styled from 'styled-components';

export const ColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  gap: 1.5rem; 
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 1rem; 
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 3rem auto;
  max-width: 1150px;
  padding: 2rem;
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd; 
  border-radius: 5px;
  margin-top: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 1rem;
    margin-top: 1.5rem;
  }
`;
