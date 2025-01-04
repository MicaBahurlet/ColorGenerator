// import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link } from 'react-router-dom';
// import { NavWrapper, Logo, CustomNavbar, MenuItem, NavLinks, HamburgerIcon } from './StylesNavBar';
// import LogoImg from '../../img/Logo3.png';

// const MyNavbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <CustomNavbar>
//       <NavWrapper>
//         <Link to="/">
//           <Logo src= {LogoImg} alt="Logo" />
//         </Link>
        
//         <HamburgerIcon onClick={() => setExpanded(!expanded)} />
        
//         <NavLinks expanded={expanded}>
//           <MenuItem>
//             <Link to="/colores">Colores</Link>
//           </MenuItem>
//           <MenuItem>
//             <Link to="/como-usar">Cómo Usar</Link>
//           </MenuItem>
//         </NavLinks>
//       </NavWrapper>
//     </CustomNavbar>
//   );
// };

// export default MyNavbar;


// import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link } from 'react-router-dom';
// import { NavWrapper, Logo, CustomNavbar, MenuItem, NavLinks, HamburgerIcon, LogoContainer,TitleNav } from './StylesNavBar'; 
// import LogoImg from '../../img/Logo3.png';

// const MyNavbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <CustomNavbar>
//       <NavWrapper>
//         <Link to="/">
//           <LogoContainer>
//             <Logo src={LogoImg} alt="Logo" />
//             <TitleNav>ColorGenerator</TitleNav>  
//           </LogoContainer>
//         </Link>

//         <HamburgerIcon onClick={() => setExpanded(!expanded)} />

//         <NavLinks expanded={expanded}>
//           <MenuItem>
//             <Link to="/">Inicio</Link>
//           </MenuItem>
//           <MenuItem>
//             <Link to="/como">Cómo Usar</Link>
//           </MenuItem>
//         </NavLinks>
//       </NavWrapper>
//     </CustomNavbar>
//   );
// };

// export default MyNavbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { NavWrapper, Logo, CustomNavbar, MenuItem, NavLinks, HamburgerIcon, LogoContainer, TitleNav } from './StylesNavBar'; 
import LogoImg from '../../img/Logo3.png';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleGoToHome = (e) => {
    // Prevenir el comportamiento por defecto del link (no navegar directamente)
    e.preventDefault();

    // Verificar si ya estamos en la ruta de inicio
    if (window.location.pathname === '/') {
      // Si estamos en '/', forzar la recarga de la página
      window.location.reload();
    } else {
      // Si no estamos en la página de inicio, navegar a la ruta de inicio
      navigate('/');
    }
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

        <HamburgerIcon onClick={() => setExpanded(!expanded)} />

        <NavLinks expanded={expanded}>
          <MenuItem>
            <Link to="/" onClick={handleGoToHome}>Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/como">Cómo Usar</Link>
          </MenuItem>
        </NavLinks>
      </NavWrapper>
    </CustomNavbar>
  );
};

export default MyNavbar;

