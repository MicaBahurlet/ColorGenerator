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


// import styled from 'styled-components';
// import { GiHamburgerMenu } from 'react-icons/gi';

// // Contenedor principal del navbar
// export const CustomNavbar = styled.nav`
//   background-color: #008080; 
//   padding: 2rem 5rem;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   color: white;
//   font-family: 'Montserrat', sans-serif;
//   margin: 0;

// `;

// // Contenedor de los elementos de navegación
// export const NavWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

// // Contenedor para el logo y el título
// export const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem; 
//   /* margin-left: 7rem; */

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
//       border-radius: 10px;
//       padding: 0.5rem; 
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


// export const TitleNav = styled.div`
//   font-size: 1.8rem;
//   font-weight: 600;
//   color: white;
//   font-family: 'Montserrat', sans-serif;
//   text-align: center;
//   margin-left: 0.5rem; 
//   text-decoration: none;
  
// `;


import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'; // Ícono de cierre

// Contenedor principal del navbar
export const CustomNavbar = styled.nav`
  background-color: #008080; 
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
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
`;

// Logo
export const Logo = styled.img`
  width: 90px; 
  height: auto;
`;

// Links de navegación
// export const NavLinks = styled.div`
//   display: flex;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     position: absolute;
//     top: 130px;
//     right: 0;
//     background-color: #008080;
//     width: 90%; 
//     max-width: 400px; 
//     padding: 3rem 2rem;
//     display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
//     border-radius: 0 0 10px 10px;
//     transition: all 0.3s ease-in-out;

//     /* Centrar menú en pantalla */
//     left: 50%;
//     transform: translateX(-50%);
//   }
// `;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  z-index: 3; /* Encima del overlay */

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 130px;
    right: 0;
    background-color: #008080;
    width: 90%; 
    max-width: 400px; 
    padding: 3rem 2rem;
    display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 10px 10px;
    transition: all 0.3s ease-in-out;

    left: 50%;
    transform: translateX(-50%);
  }
`;

// Elementos individuales del menú
export const MenuItem = styled.div`
  & a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;


    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    & a {
      font-size: 1.5rem;
      padding: 1rem;

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

// Ícono de cierre
export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Título del logo
export const TitleNav = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-left: 0.5rem;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro con opacidad */
  display: ${({ expanded }) => (expanded ? 'block' : 'none')}; /* Visible solo cuando el menú está abierto */
  z-index: 2; /* Coloca esta capa detrás del menú pero encima del resto del contenido */
`;