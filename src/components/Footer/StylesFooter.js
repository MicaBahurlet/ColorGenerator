import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #008080;
  /* padding: 20px 40px; */
  /* position: relative; */
  bottom: 0;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  /* box-sizing: border-box; */
  overflow-x: hidden; 
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  max-width: 100%; 
`;

export const FooterLinks = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 1rem;
  font-family:  'Montserrat', sans-serif;

  &:hover {
    color: #fff;
    opacity: 0.8;
  }
`;

export const FooterText = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
  margin: 0;
  flex-basis: 100%; 
  font-family: 'Montserrat', sans-serif;
`;

// Estilos responsivos para pantallas pequeñas
export const MobileFooterContainer = styled(FooterContainer)`
  @media (max-width: 768px) {
    padding: 15px 20px; /* Reducir padding en pantallas pequeñas */
    justify-content: center; /* Centrar los elementos en móviles */
    text-align: center;
  }
`;

export const MobileLogo = styled(Logo)`
  @media (max-width: 768px) {
    width: 200px; /* Reducir tamaño del logo en pantallas pequeñas */
  }
`;

export const MobileFooterLinks = styled(FooterLinks)`
  @media (max-width: 768px) {
    font-size: 20px; /* Reducir tamaño del icono */
  }
`;

export const MobileFooterText = styled(FooterText)`
  @media (max-width: 768px) {
    font-size: 12px; /* Reducir tamaño del texto */
  }
`;
