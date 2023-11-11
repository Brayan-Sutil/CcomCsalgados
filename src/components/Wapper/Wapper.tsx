import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import ScreenName from "../ScreenName/ScreenName";
import MenuMobile from "../MenuMobile/MenuMobile";
import MenuButton from "../Buttons/MenuButton/MenuButton";
import Menu from "../Menu/Menu";

export const Wapper = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [title, setTitle] = useState("");
  const [menuItem, setMenuItem] = useState(true);
  const location = useLocation();

  return (
    <>
      <Header
        openMenu={() => {
          setOpenMenu(true);
          setTitle("Menu");
          setMenuItem(true);
        }}
      />
      <ScreenName location={location.pathname} />
      <Menu />
      <MenuMobile
        menuItem={menuItem}
        title={title}
        onHide={() => setOpenMenu(true)}
        closeMenu={() => setOpenMenu(false)}
        show={openMenu}
      />
      <MenuButton
        onClick={() => {
          setOpenMenu(true);
          setTitle("Cardapio");
          setMenuItem(false);
        }}
      />
    </>
  );
};
