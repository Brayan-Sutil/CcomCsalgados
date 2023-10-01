import { useEffect, useState } from "react";
import css from "./ScreenName.module.css"
import { ScreenNameParamList } from "./ScreenNameParamList";

const ScreenName = ({ location } : ScreenNameParamList) => {
  const [locationPathName, setLocationPathName] = useState("Salgado Frito");

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderLocation = () => {
    switch (location) {
      case "/cento_fritos":
        return setLocationPathName("Centos Fritos");
      case "/cento_assados":
        return setLocationPathName("Cento Assados");
      case "/sobre_nos":
        return setLocationPathName("Sobre Nós");
      case "/sua_opiniao":
        return setLocationPathName("Sua Opinião");
      case "/localizacao":
        return setLocationPathName("Localização");
      case "/carrinho":
        return setLocationPathName("Pedidos");
      default:
        return setLocationPathName("Home");
    }
  };

  useEffect(() => {
    renderLocation()
  }, [location, renderLocation]);

  return (
    <div className={css.containerScreenName}>
      <h1 className={css.titleScreenName}>{locationPathName}</h1>
    </div>
  );
};

export default ScreenName