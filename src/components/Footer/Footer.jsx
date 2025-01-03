import React from 'react';
import { FooterContainer, Logo, FooterItem, FooterLinks, FooterText } from './StylesFooter';
import { TbWorldShare } from "react-icons/tb";
import LogoMio from '../../img/LogoMioBlanco.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <Logo src={LogoMio} alt="Logo" />
      </FooterItem>
      <FooterItem>
        <FooterLinks href="https://micaela-bahurlet.vercel.app/" target="_blank">
          <TbWorldShare size={24} />
          <p>Mi Portafolio</p>
        </FooterLinks>
      </FooterItem>
      <FooterItem>
        <FooterText>&copy; Todos los derechos reservados</FooterText>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
