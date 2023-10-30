import css from "./OrderCart.module.css"
import BoxProduct from "../../components/BoxProduct/BoxProduct";


const OrderCart = () => {
  const rawValue = localStorage.getItem("meuArray");
  const list = rawValue !== null ? JSON.parse(rawValue) : "";
  const arrayString = localStorage.getItem("meuArray");
  if (arrayString) {
    const arrayS = JSON.parse(arrayString);

    if (arrayS.length === 0) {
      console.log("O array está vazio.");
    } else {
      console.log("O array não está vazio.");
    }
  } else {
    console.log("O array não existe no localStorage.");
  }
 
  return (
      <div className={css.containerOrderCart}>
        {list.map((prod: { produto: string; valor: string; }) => (
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
