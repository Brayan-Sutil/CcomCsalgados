import { Outlet } from "react-router"
import { Wapper } from "./components/Wapper/Wapper"
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Wapper />
      <Outlet />
    </ContextProvider>
  );
}

export default App
