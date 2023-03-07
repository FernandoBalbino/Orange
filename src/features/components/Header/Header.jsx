import React, { useState, useRef} from "react";
import './Header.css'
import Icon from './arrow.svg'
import whatsapp from '../MainHome/icons/whatsapp.png'
import email from '../MainHome/icons/email.png'
import Close from './close.svg'
import especial from './especial.png'
import internacional from './internacional.png'
import nacional from './nacional.png'
import destinos from './destinos.png'
import navios from './navios.png'
import cruzeiroTematico from './tematico.png'
import Logo from './Logo.png'
import { Link } from "react-router-dom";
import Whatsapp from "../Whatsapp";





export default function Header(){
    
    const mediaSize = 991;
    const [menu, setMenu] = useState('nav-menu')
    const [iconLink, setIconLink] = useState('iconLink')
    const [overlay, setOverlay] = useState('menu-overlay')
    const containerRefMenu = useRef();
    
    
    function changeMenu(){
        document.body.classList.toggle('hidden-scroll')
        if(menu === 'nav-menu' && overlay === 'menu-overlay'){
            setMenu('nav-menu open');
            setOverlay('menu-overlay active')
        }else{
            setMenu('nav-menu')
            setOverlay('menu-overlay')
        }
    }

   function subMenu(e){
    
    e.preventDefault();
    if(e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
        
       const menuItem = e.target.parentElement;
       

            if(menuItem.classList.contains('active')){
                collapseSubMenu();
                
            }else{

            if(containerRefMenu.current.querySelector('.menu-item-has-children.active')){
                collapseSubMenu();
                
            }

           menuItem.classList.add('active')
           menuItem.classList.add('menu-item-has-children')
           const subMenu = menuItem.querySelector('.sub-menu')
           subMenu.style.maxHeight = subMenu.scrollHeight + 'px'

       }
       
    }
   }

   function resizeFix(){
        if(containerRefMenu.current.classList.contains('open')){
            changeMenu()
        }
        if(containerRefMenu.current.querySelector('.menu-item-has-children.active')){
            collapseSubMenu();
        }
   
    }
   function collapseSubMenu(){
    containerRefMenu.current.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
    containerRefMenu.current.querySelector('.menu-item-has-children.active').classList.remove('active')
    window.addEventListener('resize', function(){
        if(this.innerWidth > mediaSize){
            resizeFix()
        }
    })

}

   
    
    return(
        <>
            
           <header>
            <div className="container">
                <div className="header-main">

                    <div className="logo">
                        <Whatsapp />
                        <Link to="/"> 
                            <img title="Logo" width='260px' height='0' src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div onClick={() => changeMenu()} className="open-nav-menu">
                        <span></span>
                    </div>
                    <div onClick={() => changeMenu()} className={overlay}>

                    </div>
                    <nav onClick={(e) =>  subMenu(e)} className={menu} ref={containerRefMenu}>
                        <div className="close-nav-menu" onClick={() => changeMenu()}>
                            <img src={Close} alt="close-menu" />
                        </div>
                        <ul className="menu">
                            <li className="menu-item menu-item-has-children">
                                
                                <Link data-toggle="sub-menu">Pacotes <img className={iconLink} src={Icon} alt="arrow" /></Link>
                                <ul className="sub-menu">
                                    <div className="detailSubMenu">
                                        Nossos pacotes
                                    </div>
                                    <li className="menu-item"><Link to='/pacotes-especiais'>
                                       <img width='16px' height='16px' src={especial} alt="iconPacotesEspeciais" /> Pacotes Especiais
                                    </Link></li>
                                    <li className="menu-item"><Link to='/pacotes-internacionais'>
                                    <img width='16px' height='16px'  src={internacional} alt="iconPacotesInternacionais" />
                                    Pacotes Internacionais</Link></li>
                                    <li className="menu-item"><Link to='/pacotes-nacionais'>
                                    <img width='16px' height='16px' src={nacional} alt="iconNacionalPacotes" />
                                    Pacotes Nacionais</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link data-toggle="sub-menu" >Cruzeiros <img className={iconLink} src={Icon} alt="arrow" /></Link>
                                <ul className="sub-menu">
                                <div className="detailSubMenu">
                                        Viagens
                                    </div>
                                    <li className="menu-item"><Link to='/cruzeiros-nacionais'><img width='16px' height='16px' src={destinos} alt="iconDestinos" />Cruzeiros Nacionais</Link></li>
                                    <li className="menu-item"><Link to='/cruzeiros-internacionais'><img width='16px' height='16px' src={navios} alt="iconNavios" />Cruzeiros Internacionais</Link></li>
                                    <li className="menu-item"><Link to='/cruzeiros-tematicos'><img width='16px' height='16px' src={cruzeiroTematico} alt="iconNavios" />Cruzeiros Temáticos</Link></li>
                                </ul>
                            </li>
                            
                            <li className="menu-item">
                                <Link to="/perguntas-frequentes">Dúvidas?</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/sobre-a-orangetour">Sobre</Link>
                            </li>
                            
                        </ul>
                    </nav>
                    <div id="contact">
                <div className="container">
                        <div id="contactFlex">
                            <div id="contactEmail">
                                <a aria-label="email" target="_blank" rel="noopener" href="mailto:example@gmail.com">
                                    <address>
                                    <img height='24px' width='24px' src={email} alt="iconEmail" />
                                    </address>
                                </a>
                            </div>
                            
                            <div id="contactWhatsapp">
                                <a aria-label="Whatsapp" target="_blank" rel="noopener"  href="https://wa.me/5582987239026">
                                    <img width='24px' height='24px' src={whatsapp} alt="iconWhatssap" />
                                </a>
                            </div>
                            <div>
                                <button id="btnContact">Produtos</button>
                            </div>
                        </div>
                </div>
            </div>
                </div>
            </div>
           </header>
           
        </>
    )
}