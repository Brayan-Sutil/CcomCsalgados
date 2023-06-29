import { NavLink } from "react-router-dom";
import css from "./Menu.module.css"

const Menu = () => {
    return (
      <div className={css.box}>
        <div className={css.boxName}>
          <NavLink 
            to={"/"} 
            className={css.productName}
          >
            Salgado Assado
          </NavLink>
        </div>
        
        <div className={css.boxName}>
          <NavLink 
            to={"/salgados_fritos"} 
            className={css.productName}
          >
            Salgado Frito
          </NavLink>
        </div>

        <div className={css.boxName}>
          <NavLink 
            to={"/cento_assados"} 
            className={css.productName}
          >
            Cento Assado
          </NavLink>
        </div>

        <div className={css.boxName}>
          <NavLink 
            to={"/cento_fritos"} 
            className={css.productName}
          >
            Cento Frito
          </NavLink>
        </div>
      </div>
    );
}

export default Menu