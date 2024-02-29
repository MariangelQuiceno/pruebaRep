
import { LogoSena } from '../../SenaLogo/SenaLogo';
import logoSena from '../../../assets/ImgSena/imgSena3.png';
import '../Home/homeCss.css'

export const Home = () => {
    return (
      <div className="father-home"> 
         <LogoSena ImgRef={logoSena} />
         <h1>SENA</h1>
         <h1>Centro de Comercio y Turismo</h1>
         <h1>ADSO 2696224</h1>
      </div>
    );
  };