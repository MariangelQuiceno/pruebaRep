import { Header } from '../../components/Layouts/Header/Header'
import { LogoSena } from '../../components/SenaLogo/SenaLogo';
import { HeaderTitle } from '../headerComponents/HeaderTitle/HeaderTitle';
import { ImgProfile } from '../headerComponents/ImgProfile/ImgProfile';
import { NavBar } from '../headerComponents/NavBar/NavBar';
import logoSena from '../../assets/ImgSena/logoSenaV2.png';
import './headerPartCss.css'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";




export const HeaderPart = () => {
    return (
      
         <Header>
          <div className='Img-title'>
         <ImgProfile/>
         <HeaderTitle text="Mariángel Quiceno" level={1} />
         </div>
         <p className="line" >___________</p>
         <NavBar/>
         <LogoSena ImgRef={logoSena} />
         < p className="iconsHeader" >
         <a href="https://co.linkedin.com/"><BsLinkedin/> </a>
         <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr"><BsFacebook/> </a>
         <a href="https://www.instagram.com/"><BsInstagram/>  </a>
         <a href=" https://twitter.com/TheLittleCanis?t=2AQXVbfnb2y1wpblfI5-7g&s=33"><BsTwitterX/> </a>
          </p>
         </Header>
     
    );
  };