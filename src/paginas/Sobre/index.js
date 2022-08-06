import React from 'react';
import Header from '../../componentes/Header/';
import Footer from '../../componentes/Footer/';
import './style.css';

// Imagens
import sobre_image from '../../assets/sobre-image.jpg'
import sabores from '../../assets/sabores.jpg';


const Sobre = () => (
     <div>
          <Header/>
          <main>
               <section id='secao-banner-sobre'>
                    <div className='box-titulo-banner'>
                         <h1>A Gelateria</h1>
                    </div>
               </section>
               <section id='secao-sobre'>
                    <div className='area-limite'>
                         <div className='texto-sobre'>
                              <div className='titulo-texto-sobre'>
                                   <h2>Sobre Nós</h2>
                                   <span>Nós simplismente amamos sorvete!</span>
                              </div>
                              <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                              <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                         </div>
                    </div>
               </section>
               <section id='secao-fotos-sobre'>
                    <div className='box-fotos-sobre'>
                         <img src={ sobre_image } alt='Clientes sorveteria Gelateria'></img>
                         <img src={ sabores } alt='Sorveteria Gelateria'></img>
                    </div>
               </section>
          </main>
          <Footer/>
     </div>
);

export default Sobre;