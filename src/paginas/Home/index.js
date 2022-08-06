import React from 'react';
import Header from '../../componentes/Header/';
import Footer from '../../componentes/Footer/';
import './style.css';


const Home = () => (
     <div>
          <Header/>
          <main>
               <section id='secao-banner'>
                    <div className='box-banner'>
                         <h1>Sorvete Artesanal</h1>
                    </div>
               </section>     
               <section id='secao-nossos-sabores'>
                    <div className='box-imagem-e-texto area-limite'>
                         <div className='box-imagem'>
                              <img src='assets/banner-sabores.jpg' alt='Sorvete Gelateria'></img>
                         </div>
                         <div className='box-descricoes'>
                              <div className='box-titulo-descricoes'>
                                   <h2>Nossos Sabores</h2>
                                   <span>Novos e deliciosos!</span>
                              </div>
                              <div className='conteudo-descricoes'>
                                   <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à brase de frutas e nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser gostoso e saudável ao mesmo tempo!</p>
                              </div>
                         </div>
                    </div>
               </section>
               <section id='secao-nossos-eventos'>
                    <div className='box-imagem-e-texto area-limite'>
                         <div className='box-descricoes'>
                              <div className='box-titulo-descricoes'>
                                   <h2>Nossos Eventos</h2>
                                   <span>Delicias com sorvete!</span>
                              </div>
                              <div className='conteudo-descricoes'>
                                   <p>Mais que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                              </div>
                         </div>
                         <div className='box-imagem'>
                              <img src='assets/eventos-image.jpg'></img>
                         </div>
                    </div>
               </section>
               <section id='secao-sobre-nos'>
                    <div className='box-imagem-e-texto area-limite'>
                         <div className='box-imagem'>
                              <img src='assets/sobre-image.jpg'></img>
                         </div>
                         <div className='box-descricoes'>
                              <div className='box-titulo-descricoes'>
                                   <h2>Sobre Nós</h2>
                                   <span>Alegria em cada casquinha</span>
                              </div>
                              <div className='conteudo-descricoes'>
                                   <p>Venha tomar o melhor sorvete da região  aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para nossos clientes e vocÇe não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
          <Footer/>
     </div>
);

export default Home;