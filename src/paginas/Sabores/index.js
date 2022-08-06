import React from 'react';
import Header from '../../componentes/Header/'
import Footer from '../../componentes/Footer/'
import './style.css';


const Sabores = () => (
     <div>
          <Header/>
          <main>
               <section id='secao-banner-sabores'>
                    <div className='box-titulo-banner'>
                         <h1>Nossos Sabores</h1>
                    </div>
               </section>
               <section id='secao-sabores'>
                    <div className='area-limite'>
                         <div className='box-titulo'>
                              <h2>Sabores de Sorvete</h2>
                         </div>
                         <div className='box-cards-sabores'>
                              <div className='card-sabor'>
                                   <figure>
                                        <img src='assets/sabor-oreo.png' alt='Sorvete Sabor Oreo'></img>
                                   </figure>
                                   <div className='descricao-card'>
                                        <h3>Sorvete de Oreo</h3>
                                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                                   </div>
                              </div>
                              <div className='card-sabor'>
                                   <figure>
                                        <img src='assets/sabor-pistache.png' alt='Sorvete sabor Pistache'></img>
                                   </figure>
                                   <div className='descricao-card'>
                                        <h3>Sorvete Pistache</h3>
                                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                                   </div>
                              </div>
                              <div className='card-sabor'>
                                   <figure>
                                        <img src='assets/sabor-cookies-avela.png' alt='Sorvete sabor Cookies e Avelã'></img>
                                   </figure>
                                   <div className='descricao-card'>
                                        <h3>Sorvete Cookies e Avelã</h3>
                                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                                   </div>
                              </div>
                              <div className='card-sabor'>
                                   <figure>
                                        <img src='assets/sabor-kiwi.png' alt='Sorvete sabor Kiwi'></img>
                                   </figure>
                                   <div className='descricao-card'>
                                        <h3>Sorvete de Kiwi</h3>
                                        <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
                                   </div>
                              </div>
                              <div className='card-sabor'>
                                   <figure>
                                        <img src='assets/sabor-morango.png' alt='Sorvete sabor Morango'></img>
                                   </figure>
                                   <div className='descricao-card'>
                                        <h3>Sorvete de Morango</h3>
                                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                                   </div>
                              </div>
                              <div className='card-sabor'>
                                   <figure>
                                        <img src='assets/sabor-limao.png' alt='Sorvete sabor Limão'></img>
                                   </figure>
                                   <div className='descricao-card'>
                                        <h3>Sorvete de Limão Siciliano</h3>
                                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
          <Footer/>
     </div>
);

export default Sabores;