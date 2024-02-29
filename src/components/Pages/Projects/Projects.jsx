import { LogoSena } from "../../SenaLogo/SenaLogo";
import logoSena from '../../../assets/ImgSena/logoSena.png'
import { Titles } from "../../Titles/Titles";
import {CardsProject} from "../../Cards/CardsProject/CardsProject"
import nubePng from "../../../assets/imgProyectos/nube.png"
import shopPng from "../../../assets/imgProyectos/shopc.png"
import './projectsCss.css'


export const Projects = () => {
  return (
      <div className="father-project">
      <div className="title-container-profile">
      <LogoSena ImgRef={logoSena} />
      <Titles text="Proyectos" level={2} />
      </div>
      <div className="cards-projects-container">
        <CardsProject id="1" img={nubePng} title="API Rest" description="Practica de API Rest" link="https://github.com/MariangelQuiceno/ApiRestV1.2.git" />
        <CardsProject id="2" img={shopPng} title="Tienda" description="Practica de Tienda" link="https://mariangelquiceno.github.io/CarritoComprasRP/" />  
      </div>
      
      </div>
       
  );
};

