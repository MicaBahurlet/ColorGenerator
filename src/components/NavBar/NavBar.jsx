
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  NavWrapper, 
  Logo, 
  CustomNavbar, 
  MenuItem, 
  NavLinks, 
  HamburgerIcon, 
  CloseIcon, 
  LogoContainer, 
  TitleNav, 
  Overlay 
} from './StylesNavBar';
import LogoImg from '../../img/Logo3.png';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleGoToHome = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
    setExpanded(false); // cierra el menú si se navega a la página de inicio
  };

  const handleLinkClick = () => {
    setExpanded(false); // cierra el menú cuando se selecciona un enlace
  };

  return (
    <CustomNavbar>
      <NavWrapper>
        <Link to="/" onClick={handleGoToHome}>
          <LogoContainer>
            <Logo src={LogoImg} alt="Logo" />
            <TitleNav>ColorGenerator</TitleNav>
          </LogoContainer>
        </Link>

        {expanded ? (
          <CloseIcon onClick={() => setExpanded(false)} />
        ) : (
          <HamburgerIcon onClick={() => setExpanded(true)} />
        )}

        <Overlay expanded={expanded} onClick={() => setExpanded(false)} />

        <NavLinks expanded={expanded}>
          <MenuItem>
            <Link to="/" onClick={handleGoToHome}>Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/como" onClick={handleLinkClick}>Cómo Usar</Link>
          </MenuItem>
        </NavLinks>
      </NavWrapper>
    </CustomNavbar>
  );
};

export default MyNavbar;

