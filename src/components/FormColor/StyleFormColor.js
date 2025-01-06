import styled, { createGlobalStyle } from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    /* color: #008080;  */
    color: black;
    margin-bottom: 2rem;
    font-family: 'Montserrat', sans-serif;
`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* min-height: 50vh; */
    /* background-color: whitesmoke; */
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    margin: 0 auto;
    max-width: 1270px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: auto;
        max-width: 400px;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
`;

export const StyledInput = styled.input`
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #008080;
    border-radius: 5px;
    background-color: #f4ffff;
    color: #004d4d;
    outline: none;

    &:focus {
        border-color: #00a1a1;
    }
`;

export const StyledButton = styled.button`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #008080;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        background-color: #005c5c;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


export const ErrorMessage = styled.p`
    color: #ff4d4d;
    font-size: 0.9rem;
    text-align: left;
    margin: 0;
`;


export const ClearButton = styled.button`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #008080; 
    background-color: transparent;
    border: 2px solid #008080; 
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        background-color: #e0f7f7;
    }
`;

export const MessageContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%; 
`;

