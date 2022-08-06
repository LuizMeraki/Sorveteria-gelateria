import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/logo.png'
import './style.css';


const Header = () => (
     <header>
          <div className='menu area-limite'>
               <figure>
                    <img src={ logo } alt='Logo Gelateria'></img>
               </figure>
               <nav>
                    <Link className='links-topo' to='/'>Home</Link>
                    <Link className='links-topo' to='/sabores/'>Sabores</Link>
                    <Link className='links-topo' to='/sobre/'>Sobre</Link>
               </nav>
          </div>
     </header>
);

export default Header;