import React from 'react';
import "./NavBar.css";
import CardWidget from '../CardWidget/CardWidget';



const NavBar = () => {
    return (
        <div >
            <nav className='NavBar' >
                <ul  >
                    <li><a href="#" >Inicio</a></li>
                    <li><a href="#" >Hombre</a></li>
                    <li><a href="#" >Mujer</a></li>
                    <li><a href="#" >Deporte</a></li>
                    <li><a href="#" >Contacto</a></li>
                    <li><CardWidget/></li>
                </ul>
            </nav>
        </div>
  )
}

export default NavBar
