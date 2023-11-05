import css from "./OrderCart.module.css"
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import { UseContextInProvider } from "../../Context/Context";


const OrderCart = () => {
  const {  wishList } = UseContextInProvider()
 
  return (
    <div className={css.containerOrderCart}>
      {wishList.map((prod: { produto: string; valor: string }) => (
        <BoxProduct
          labelButton="Excluir"
          nameProduct={prod.produto}
          onClick={() => "console.log(meuArray)"}
          valueProduct={prod.valor}
          key={0}
        />
      ))}
    </div>
  );
}

export default OrderCart;
