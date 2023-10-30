import { NavLink } from "react-router-dom";
import css from "./buttonFullBuy.module.css"
import { ShoppingCartOutlined } from '@mui/icons-material';

type Props = {
  label: string;
  onclick: () => void;
};

const ButtonFullBuy = ({ label, onclick }: Props) => {
 const arrayString = localStorage.getItem("meuArray");
 const products = arrayString ? JSON.parse(arrayString) : [];
 const numberOfProducts = products.length;
 const totalValue = products.reduce((total: number, product: { valor: string; }) => {
   const productValue = parseFloat(product.valor.replace(",", "."));
   return total + productValue;
 }, 0);
 const formattedTotalValue = totalValue.toFixed(2).replace(".", ",");

  return (
    <button className={css.container} onClick={onclick}>
      <NavLink to={"/carrinho"} style={{ textDecoration: "none" }}>
        <div className={css.iconText}>
          <ShoppingCartOutlined sx={{ color: "#000000" }} />
          <h1 className={css.titleButton}>Total do Seu Pedido</h1>
        </div>
        <div className={css.line}></div>
        <div className={css.details}>
          <p>{`${numberOfProducts} Itens ${formattedTotalValue}`}</p>
        </div>
      </NavLink>
    </button>
  );
};

export default ButtonFullBuy