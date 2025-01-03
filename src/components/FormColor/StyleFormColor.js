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
`;


export const ErrorMessage = styled.p`
    color: #ff4d4d;
    font-size: 0.9rem;
    text-align: left;
    margin: 0;
`;
