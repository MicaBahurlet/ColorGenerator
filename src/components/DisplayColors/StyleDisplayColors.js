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
    /* background-color: whitesmoke; */
`;
