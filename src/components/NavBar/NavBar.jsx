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


import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { NavWrapper, Logo, CustomNavbar, MenuItem, NavLinks, HamburgerIcon, LogoContainer,TitleNav } from './StylesNavBar'; 
import LogoImg from '../../img/Logo3.png';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <CustomNavbar>
      <NavWrapper>
        <Link to="/">
          <LogoContainer>
            <Logo src={LogoImg} alt="Logo" />
            <TitleNav>ColorGenerator</TitleNav>  
          </LogoContainer>
        </Link>

        <HamburgerIcon onClick={() => setExpanded(!expanded)} />

        <NavLinks expanded={expanded}>
          <MenuItem>
            <Link to="/colores">Colores</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/como-usar">Cómo Usar</Link>
          </MenuItem>
        </NavLinks>
      </NavWrapper>
    </CustomNavbar>
  );
};

export default MyNavbar;
