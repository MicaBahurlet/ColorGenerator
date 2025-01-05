// import styled from 'styled-components';

// export const ColorsContainer = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//     width: 100%;
//     margin: 0 auto;
//     max-width: 1200px;
//     gap: 1.5rem;
//     justify-content: center;
//     align-items: center;
//     padding: 2rem;
//     /* margin-bottom: 3rem; */
//     /* background-color: whitesmoke; */
// `;


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
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
