import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/" target="blank_">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a Imersão React da Alura Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/nathalia-siqueira-cecilio-a8043513b/" target="blank_">
            Nathalia S Cecílio
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
