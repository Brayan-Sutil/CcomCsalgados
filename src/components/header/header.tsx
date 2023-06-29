import css from "./header.module.css"
import MinhaImagem from "../../assets/logo.png"
import ButtonFullBuy from "../Buttons/ButtonFullBuy/buttonFullBuy"
import ButtonOutlined from "../Buttons/ButtonOutlined/ButtonOutlined"
import BackgroundScreen from "../BackgroundScreen/backgroundScreen"

type headerProps = {
  openMenu: () => void
};

const Header = ({ openMenu }: headerProps) => {
  return (
    <>
      <div className={css.containerHeader}>
        <div className={css.boxLogo}>
          <img src={MinhaImagem} alt="Minha Imagem" className={css.imageLogo} />
          <BackgroundScreen />
        </div>
        <ButtonOutlined onClick={openMenu} />
        <ButtonFullBuy label="Total do Seu Pedido" />
      </div>
    </>
  );
};

export default Header