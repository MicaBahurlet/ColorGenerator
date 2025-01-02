import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: whitesmoke;
    font-family: 'Montserrat', sans-serif;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;

    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
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

    &:hover {
        background-color: #005c5c; 
    }
`;

export const ErrorMessage = styled.p`
    color: #ff4d4d; 
    font-size: 0.9rem;
    text-align: left;
    margin: 0;
`;
