import { NavLink } from "react-router-dom";
import css from "./buttonFullBuy.module.css"
import { ShoppingCartOutlined } from '@mui/icons-material';

type Props = {
  onclick: () => void;
};

const ButtonFullBuy = ({ onclick }: Props) => {
  return (
    <button className={css.container} onClick={onclick}>
      <NavLink to={"/carrinho"} style={{ textDecoration: "none" }}>
        <div className={css.iconText}>
          <ShoppingCartOutlined sx={{ color: "#000000" }} />
          <h1 className={css.titleButton}>Total do Seu Pedido</h1>
        </div>
      </NavLink>
    </button>
  );
};

export default ButtonFullBuy