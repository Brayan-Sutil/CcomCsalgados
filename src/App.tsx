import { useState} from "react"
import Menu from "./components/Menu/Menu"
import MenuMobile from "./components/MenuMobile/MenuMobile"
import Header from "./components/header/header"
import { Outlet } from "react-router"
import MenuButton from "./components/Buttons/MenuButton/MenuButton"
import ScreenName from "./components/ScreenName/ScreenName"
import { useLocation } from "react-router-dom"

function App() {
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ title,  setTitle ] = useState("")
  const [ menuItem, setMenuItem ] = useState(true)
  const location = useLocation();

  return (
    <div>
      <Header
        openMenu={() => {
          setOpenMenu(true);
          setTitle("Menu");
          setMenuItem(true);
        }}
      />
      <ScreenName  location={location.pathname} />
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

      <Outlet />
    </div>
  );
}

export default App
