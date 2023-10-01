import { NavLink } from "react-router-dom";
import css from "./buttonFullBuy.module.css"
import { ShoppingCartOutlined } from '@mui/icons-material';

type Props = {
  label: string;
  onclick: () => void;
};

const ButtonFullBuy = ({ label, onclick }: Props) => {
  return (
    <button className={css.container} onClick={onclick}>
      <NavLink to={"/carrinho"} style={{"textDecoration": "none"}}>
        <div className={css.iconText}>
            <ShoppingCartOutlined sx={{ color: "#000000" }} />
            <h1 className={css.titleButton}>{label}</h1>
        </div>
        <div className={css.line}></div>
      </NavLink>
    </button>
  );
};

export default ButtonFullBuy