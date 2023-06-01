import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import logo from '../Assets/img/logochip.png'
import {GiHamburgerMenu} from "react-icons/gi";
import {FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function onUpdateActiveLink(value) {
        setActiveLink(value)
    }

    return (
        <Navbar expand={"lg"} className={scrolled ? 'scrolled': ''} id={'NavBar'}>
            <Navbar.Brand href="#home">
                <img src={logo} alt={'Logo'} className={'logoImg'}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className={'navbar-toggle-icon'}><GiHamburgerMenu style={{color: "whitesmoke"}}/></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#timeline" className={activeLink === 'timeline' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('timeline')}>Timeline</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className={'navbar-text'}>
                        <div className={'social-icon'}>
                            <a href={"https://www.linkedin.com/in/oscar-vaquera/"} alt={"LinkedIn"}><FaLinkedin className={'Fa'}/></a>
                            <a href={"https://github.com/vaqueraoscar0"} alt={"Github"}><FaGithub className={'Fa'} /></a>
                            <a href={"https://www.youtube.com/@lo-fimusiccafe9849"} alt={"Youtube"}><FaYoutube className={'Fa'} /></a>
                        </div>
                        <button className={"vvd"}><span><a href={'#connect'} style={{all: "unset"}}>Let's Connect</a></span></button>
                    </span>
            </Navbar.Collapse>
        </Navbar>
    );
}
