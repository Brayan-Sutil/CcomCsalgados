import css from "./MenuButton.module.css"
import { MenuButtonParamList } from "./MenuButtonParamList";

const MenuButton = ({ onClick }: MenuButtonParamList) => {
  return (
    <button className={css.containerMenuButton} onClick={onClick}>
      <h1 className={css.titleMenuButton}>Cardapio</h1>
    </button>
  );
};

export default MenuButton;