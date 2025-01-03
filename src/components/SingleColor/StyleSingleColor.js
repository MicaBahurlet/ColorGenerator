import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
`;

export const ColorBox = styled.div`
    width: 100%;
    height: 75%;
    border-bottom: 1px solid #ccc;
`;

export const ColorLabel = styled.div`
    font-size: 1rem;
    color: #333;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.5rem;
    background-color: #f9f9f9;
    width: 100%;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const CopyButton = styled.button`
    background: none;
    border: none;
    margin-left: 0.5rem;
    cursor: pointer;
    color: ${(props) => (props.copied ? '#28a745' : '#007ba7')};
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
        color: ${(props) => (props.copied ? '#218838' : '#005f81')};
    }
`;
