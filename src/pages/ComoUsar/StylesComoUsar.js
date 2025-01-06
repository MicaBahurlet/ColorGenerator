
import styled from 'styled-components';


    export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Montserrat', sans-serif;
    color: #333;
    `;


    export const Title = styled.h1`
    text-align: left;
    font-size: 2.5rem;
    color: black;
    margin-bottom: 4rem;
    `;


    export const Instructions = styled.div`
    margin-bottom: 3rem;
    `;

    export const InstructionItem = styled.div`
    margin-bottom: 1.5rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        line-height: 1.6;
    }
    `;


    export const ColorSection = styled.div`
      margin: 4rem auto;
    `;


    export const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-top: 4rem;
    `;


    export const ColorItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    `;


    export const PinColor = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;


    export const PinText = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    `;
