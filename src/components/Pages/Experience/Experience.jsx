import { LogoSena } from "../../SenaLogo/SenaLogo";
import logoSena from '../../../assets/ImgSena/logoSena.png'
import { Titles } from "../../Titles/Titles";
import { Barprogress } from "../../BarProgress/Barprogress"
import cssL from '../../../assets/imgIconos/css.png'
import htmlL from '../../../assets/imgIconos/html.gif'
import javaL from '../../../assets/imgIconos/java.png'
import javaScriptL from '../../../assets/imgIconos/JavaScript.png'
import mongoL from '../../../assets/imgIconos/mongo.svg'
import nodeL from '../../../assets/imgIconos/node.png'
import reactL from '../../../assets/imgIconos/react.png'
import './experienceCss.css'


export const Experience = () => {
  return (
      <div className="father-experience">
      <div className="title-container-profile">
      <LogoSena ImgRef={logoSena} />
      <Titles text="Experiencia" level={2} />
      </div>
      <div className="progress-bars-container">
        <Barprogress id='1' progress={60} title="CSS" icon={cssL} />
        <Barprogress id='2' progress={60} title="HTML" icon={htmlL} />
        <Barprogress id='3' progress={40} title="JAVA" icon={javaL} />
        <Barprogress id='3' progress={50} title="JAVASCRIPT" icon={javaScriptL} />
        <Barprogress id='4' progress={30} title="MONGO DB" icon={mongoL} />
        <Barprogress id='5' progress={30} title="NODE JS" icon={nodeL} />
        <Barprogress id='5' progress={20} title="REACT" icon={reactL} />
      </div>
      
      </div>
       
  );
};


