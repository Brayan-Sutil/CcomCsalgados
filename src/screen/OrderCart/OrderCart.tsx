import css from "./OrderCart.module.css"
import { UseContextInProvider } from "../../Context/Context";
import BoxProduct from "../../components/BoxProduct/BoxProduct";


const OrderCart = () => {
  const {  wishList, deleteItemWishList } = UseContextInProvider()
 
  return (
    <div className={css.containerOrderCart}>
      {wishList.map((prod: { produto: string; valor: string }) => (
        <BoxProduct
          labelButton="Excluir"
          nameProduct={prod.produto}
          onClick={() => deleteItemWishList(prod.produto)}
          valueProduct={prod.valor}
          key={0}
        />
      ))}
    </div>
  );
}

export default OrderCart;
