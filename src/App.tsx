import { useState } from "react"
import Menu from "./components/Menu/Menu"
import MenuMobile from "./components/MenuMobile/MenuMobile"
import Header from "./components/header/header"
import { Outlet } from "react-router"

function App() {
  const [ openMenu, setOpenMenu ] = useState(false)
  console.log(openMenu)

  return (
    <div>
      <MenuMobile
        onHide={() => setOpenMenu(true)}
        closeMenu={() => setOpenMenu(false)}
        show={openMenu}
      />
      <Header openMenu={() =>setOpenMenu(true)} />
      <Menu />
      <Outlet />
    </div>
  );
}

export default App
