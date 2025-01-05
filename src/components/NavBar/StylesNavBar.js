// import styled from 'styled-components';
// import { GiHamburgerMenu } from 'react-icons/gi';

// // Contenedor principal del navbar
// export const CustomNavbar = styled.nav`
//   background-color:#008080; 
//   padding: 2rem 5rem;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   color: white;
//   font-family: 'Montserrat', sans-serif;
// `;

// // Contenedor de los elementos de navegación
// export const NavWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

// // Logo
// export const Logo = styled.img`
//   width: 90px; /* Ajusta el tamaño de tu logo */
//   height: auto;
// `;

// // Links de navegación
// export const NavLinks = styled.div`
//   display: flex;
//   gap: 1.5rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     position: absolute;
//     top: 60px;
//     right: 0;
//     background-color: #007BA7;
//     width: 100%;
//     padding: 1rem;
//     display: ${({ expanded }) => (expanded ? 'block' : 'none')};
//   }
// `;

// // Elementos individuales del menú
// export const MenuItem = styled.div`
//   & a {
//     color: white;
//     text-decoration: none;
//     font-size: 1.2rem;
//     font-weight: 500;
//     padding: 0.5rem;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: rgba(255, 255, 255, 0.1);
//     }
//   }
// `;

// // Ícono de hamburguesa
// export const HamburgerIcon = styled(GiHamburgerMenu)`
//   display: none;
//   font-size: 2rem;
//   color: white;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;


import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

// Contenedor principal del navbar
export const CustomNavbar = styled.nav`
  background-color: #008080; 
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 0;

`;

// Contenedor de los elementos de navegación
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// Contenedor para el logo y el título
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; 
  /* margin-left: 7rem; */

`;

// Logo
export const Logo = styled.img`
  width: 90px; /* Ajusta el tamaño de tu logo */
  height: auto;
`;

// Links de navegación
export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #007BA7;
    width: 100%;
    padding: 1rem;
    display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  }
`;

// Elementos individuales del menú
export const MenuItem = styled.div`
  & a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 0.5rem; 
    }
  }
`;

// Ícono de hamburguesa
export const HamburgerIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;


export const TitleNav = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-left: 0.5rem; 
  text-decoration: none;
  
`;