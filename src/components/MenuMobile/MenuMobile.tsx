import { Modal } from "react-bootstrap";
import css from "./MenuMobile.module.css";
import { MenuMobileParamList } from "./MenuMobileParamList";
import {
  CloseOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import IconsMenuMobile from "./IconsMenuMobile/IconsMenuMobile";

const MenuMobile = ({
  show,
  onHide,
  closeMenu,
  title,
  menuItem
}: MenuMobileParamList) => {
  return (
    <Modal show={show} onHide={onHide}>
      <div className={css.box}>
        <div className={css.titleBox}>
          <CloseOutlined
            fontSize="large"
            sx={{ color: "#ffffff", marginLeft: "90%", marginTop: "25px" }}
            onClick={closeMenu}
          />
          <h1 className={css.title}>{title}</h1>
        </div>
        <div className={css.itemMenu}>
          {menuItem ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <nav>
                <NavLink to={"/sobre_nos_deixe"}>Sobre Nós Deixe</NavLink>
                <NavLink to={"/sua_opiniao"}>Sua Opiniao</NavLink>
                <NavLink to={"/localizaçao"}>Localizaçao</NavLink>
              </nav>
              <IconsMenuMobile />
            </div>
          ) : (
            <nav>
              <NavLink to={"/"}>Salgado Assado</NavLink>
              <NavLink to={"/salgados_fritos"}>Salgado Frito</NavLink>
              <NavLink to={"/cento_assados"}>Cento Assado</NavLink>
              <NavLink to={"/cento_fritos"}>Cento Frito</NavLink>
            </nav>
          )}
        </div>

        <div className={css.contact}>
          <h3>Whatsapp/Telefone</h3>
          <h3>(42) 9 9951-1782</h3>
          <h3>(42) 3226-3226</h3>
        </div>
      </div>
    </Modal>
  );
};

export default MenuMobile;
