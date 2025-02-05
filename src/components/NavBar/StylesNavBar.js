
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'; 

export const CustomNavbar = styled.nav`
  background-color: black; 
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

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


export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  z-index: 3; /* encima del overlay */

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

// menu
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


export const HamburgerIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 4;

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
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${({ expanded }) => (expanded ? 'block' : 'none')}; 
  z-index: 2;
`;