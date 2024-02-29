import { LogoSena } from "../../SenaLogo/SenaLogo";
import logoSena from '../../../assets/ImgSena/logoSena.png'
import { Titles } from "../../Titles/Titles";
import './profileCss.css'


export const Profile = () => {
  return (
      <div className="father-profile">
      <div className="title-container-profile">
      <LogoSena ImgRef={logoSena} />
      <Titles text="Perfil" level={2} />
      </div>
      <div className="text-profile">
      <p>¡Hola! Soy una desarrolladora de software apasionada por la creación de soluciones innovadoras. Mi experiencia se centra en el dominio de lenguajes como CSS, HTML, Java y JavaScript, así como en el uso de herramientas indispensables como Eclipse IDE y Visual Studio Code. Además, poseo conocimientos básicos en bibliotecas como React.</p>
      <p>Mi mayor cualidad es mi constante deseo de aprender y crecer profesionalmente. La paciencia es una de mis virtudes más destacadas, lo que me permite enfrentar desafíos con calma y determinación. Además, hablo fluidamente tanto inglés como español, lo que me permite comunicarme eficazmente en entornos internacionales. </p>
      <p>Estoy emocionada por seguir ampliando mis habilidades y contribuir al desarrollo de proyectos significativos en el campo de la tecnología.</p>
      </div>
      </div>
       
  );
};