
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
  { name: 'Green', hex: '#008000' }, 
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
        <Title>Usar ColorGenerator es simple y ágil</Title>
        <Instructions>
          <InstructionItem>
            <h3>1. Ingresá el nombre de un color en inglés o un código hexadecimal</h3>
            <p> <strong>ColorGenerator</strong> te generará una paletas de colores derivadas del color que hayas seleccionado. La paleta de colores incluye los tonos más claros (tints) y más oscuros (shades).</p>
          </InstructionItem>
          <InstructionItem>
            <h3>2. Copia el código del color de tu preferencia</h3>
            <p>Seleccioná la tonalidad que más te guste y luego podes copiar el código del color que más te guste y usarlo en tus proyectos de la manera que gustes.</p>
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
          <h2>Tonalidades pastel de los colores primarios:</h2>
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
