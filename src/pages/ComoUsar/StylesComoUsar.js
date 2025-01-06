    // import styled from 'styled-components';

    // // Contenedor principal de la página
    // export const Container = styled.div`
    //   max-width: 1200px;
    //   margin: 0 auto;
    //   padding: 2rem;
    //   font-family: 'Montserrat', sans-serif;
    //   color: #333;
    // `;

    // // Título principal
    // export const Title = styled.h1`
    //   text-align: left;
    //   font-size: 2.5rem;
    //   color: black;
    //   margin-bottom: 4rem;
    // `;

    // // Contenedor de instrucciones
    // export const Instructions = styled.div`
    //   margin-bottom: 3rem;
    // `;

    // // Elemento individual de las instrucciones
    // export const InstructionItem = styled.div`
    //   margin-bottom: 1.5rem;

    //   h3 {
    //     font-size: 1.5rem;
    //     font-weight: 600;
    //   }

    //   p {
    //     font-size: 1.2rem;
    //     margin-top: 0.5rem;
    //   }
    // `;

    // // Sección de colores traducidos
    // export const ColorSection = styled.div`
    //   margin-top: 2rem;
    // `;

    // // Elemento de color con su traducción
    // export const ColorItem = styled.div`
    //   display: flex;
    //   align-items: center;
    //   margin-bottom: 1rem;
    //   gap: 1rem;
    // `;

    // // Pin de color
    // export const PinColor = styled.div`
    //   width: 40px;
    //   height: 40px;
    //   border-radius: 50%;
    //   background-color: ${({ color }) => color};
    // `;

    // // Texto del color traducido
    // export const PinText = styled.span`
    //   font-size: 1.2rem;
    //   color: #333;
    //   font-weight: 500;
    // `;


    import styled from 'styled-components';

    // Contenedor principal
    export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Montserrat', sans-serif;
    color: #333;
    `;

    // Título principal
    export const Title = styled.h1`
    text-align: left;
    font-size: 2.5rem;
    color: black;
    margin-bottom: 4rem;
    `;

    // Contenedor de instrucciones
    export const Instructions = styled.div`
    margin-bottom: 3rem;
    `;

    // Elemento individual de las instrucciones
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

    // Sección de colores
    export const ColorSection = styled.div`
      margin: 4rem auto;
    `;

    // Grid de colores
    export const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-top: 4rem;
    `;

    // Elemento de color
    export const ColorItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    `;

    // Pin de color
    export const PinColor = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    // Texto del color
    export const PinText = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    `;
