// import React, { useState, useEffect } from 'react';
// import { Container, Title, Instructions, InstructionItem, ColorSection, ColorItem, PinColor, PinText } from './StylesComoUsar.js';

// const InstructionsPage = () => {
//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     // Función para obtener los colores desde la API
//     const fetchColors = async () => {
//       try {
//         const response = await fetch('https://www.thecolorapi.com/scheme?hex=007BA7&mode=analogic&count=5');
//         const data = await response.json();
//         const colorList = data.colors.map(color => ({
//           name: color.name.value, // Nombre del color en inglés
//           hex: color.hex.value,  // Código HEX del color
//         }));
//         setColors(colorList);
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };

//     fetchColors();
//   }, []);

//   return (
//     <Container>
//       <Title>¿Cómo Usar ColorGenerator?</Title>
//       <Instructions>
//         <InstructionItem>
//           <h3>1. Ingresá el nombre de un color en ingés o un código</h3>
//           <p>ColorGenerator te dará las combinaciones de esa gama de colores.</p>
//         </InstructionItem>
//         <InstructionItem>
//           <h3>2. Copia el código del color de tu preferencia</h3>
//           <p>Podes copiar el código y usarlo en tus proyectos</p>
//         </InstructionItem>
//       </Instructions>

//       <ColorSection>
//         <h2>Ejemplo:</h2>
//         {colors.map((color, index) => (
//           <ColorItem key={index}>
//             <PinColor color={color.hex} />
//             <PinText>{color.name}</PinText>
//           </ColorItem>
//         ))}
//       </ColorSection>
//     </Container>
//   );
// };

// export default InstructionsPage;

import React from 'react';
import { 
  Container, 
  Title, 
  Instructions, 
  InstructionItem, 
  ColorSection, 
  ColorGrid, 
  ColorItem, 
  PinColor, 
  PinText 
} from './StylesComoUsar.js';

import Footer from '../../components/Footer/Footer.jsx';

const primaryColors = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Green', hex: '#008000' }, // Agregado por popularidad en diseño
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
];

const pastelColors = [
    { name: 'Pastel Red', hex: '#FFB3B3' },
    { name: 'Pastel Blue', hex: '#B3C6FF' },
    { name: 'Pastel Yellow', hex: '#FFFFCC' },
    { name: 'Pastel Green', hex: '#B3FFB3' },
    { name: 'Pastel Orange', hex: '#FFD9B3' },
    { name: 'Pastel Purple', hex: '#E6B3FF' },
  ];

  const gradientColors = [
    { name: 'Sunset Glow', colors: ['#FF7E5F', '#FEB47B'] },
    { name: 'Ocean Breeze', colors: ['#00C9FF', '#92FE9D'] },
    { name: 'Royal Purple', colors: ['#434343', '#8E44AD'] },
    { name: 'Peachy Pink', colors: ['#FF9A8B', '#FF6A88', '#FF99AC'] },
    { name: 'Skyline', colors: ['#1E3C72', '#2A5298'] },
  ];

const InstructionsPage = () => {
  return (
    <>
      <Container>
        <Title>¿Cómo Usar ColorGenerator?</Title>
        <Instructions>
          <InstructionItem>
            <h3>1. Ingresá el nombre de un color en inglés o un código</h3>
            <p>ColorGenerator te dará las combinaciones de esa gama de colores.</p>
          </InstructionItem>
          <InstructionItem>
            <h3>2. Copia el código del color de tu preferencia</h3>
            <p>Podés copiar el código del color que más te guste y usarlo en tus proyectos de la manera que gustes.</p>
          </InstructionItem>
        </Instructions>

        <ColorSection>
          <h2>Colores primarios y su traducción en inglés:</h2>
          <ColorGrid>
            {primaryColors.map((color, index) => (
              <ColorItem key={index}>
                <PinColor color={color.hex} />
                <PinText>{color.name}</PinText>
                <PinText>{color.hex}</PinText>
              </ColorItem>
            ))}
          </ColorGrid>
        </ColorSection>

        <ColorSection>
          <h2>Tonalidades pastel de los colore primarios:</h2>
          <p>*Podrás buscarlos con el código hexadecimal*</p>
          <ColorGrid>
            {pastelColors.map((color, index) => (
              <ColorItem key={index}>
                <PinColor color={color.hex} />
                <PinText>{color.name}</PinText>
                <PinText>{color.hex}</PinText>
              </ColorItem>
            ))}
          </ColorGrid>
        </ColorSection>


          <ColorSection>
              <h2>Gradientes populares para inspirarte en tus búsquedas:</h2>
              <ColorGrid>
                  {gradientColors.map((gradient, index) => (
                  <ColorItem key={index}>
                      <PinColor 
                      style={{ 
                          background: `linear-gradient(135deg, ${gradient.colors.join(', ')})` 
                      }} 
                      />
                      <PinText>{gradient.name}</PinText>
                      <PinText>{gradient.colors.join(' → ')}</PinText>
                  </ColorItem>
                  ))}
              </ColorGrid>
          </ColorSection>

        
      </Container>
      <Footer />
    </>
  );
};

export default InstructionsPage;
