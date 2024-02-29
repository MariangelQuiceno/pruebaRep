import { LogoSena } from "../../SenaLogo/SenaLogo";
import logoSena from '../../../assets/ImgSena/logoSena.png'
import { Titles } from "../../Titles/Titles";
import {CardsRef} from "../../Cards/CardsRef/CardsRef"
import './referencesCss.css'



export const References = () => {
  return (
      <div className="father-references">
      <div className="title-container-profile">
      <LogoSena ImgRef={logoSena} />
      <Titles text="Referencias" level={2} />
      </div>
      <div className="cards-references-container">
        <CardsRef refenceId="1" name="Mercedes" rol="Ama de Casa" phone="323 5939655" address="merciwuan@gmail.com" />
        <CardsRef refenceId="2" name="Jhon Jaime" rol="Comerciante" phone="314 5782131" address="jhonjaime@gmail.com" />
      </div>
      
      </div>
       
  );
};
