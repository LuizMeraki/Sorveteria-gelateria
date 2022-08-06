import React from 'react';
import './style.css';

// Imagens
import logo from '../../assets/logo.png';


const Footer = () => (
     <footer>
          <div className='footer area-limite'>
               <div className='box-informacoes'>
                    <figure>
                         <img src={ logo } alt='Logo Gelateria'></img>
                    </figure>
                    <div className='bloco-info'>
                         <h4>Endereço</h4>
                         <p>Av. Bernardino de Campos, 98</p>
                         <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div className='bloco-info'>
                         <h4>Contato</h4>
                         <a href='mailto: info@meusite.com'>info@meusite.com</a>
                         <a href='tel: 11 34567890'>(11) 3456-7890</a>
                    </div>
                    <div className='bloco-info'>
                         <h4>Horários</h4>
                         <p>ABERTO TODOS OS DIAS</p>
                         <p>10:00 - 22:00</p>
                    </div>
               </div>
               <div className='box-copyright'>
                    <p>© 2022 Gelateria - Desenvolvido por <a href='#' target='_blank'>Luiz Meraki</a></p>
               </div>
          </div>
     </footer>
);

export default Footer;