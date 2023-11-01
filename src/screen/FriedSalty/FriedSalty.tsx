import css from "./FriedSalty.module.css"
import productFried from "../../data/productFried.json";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import { UseContextInProvider } from "../../Context/Context";

const FriedSalty = () => {
  const { addItemWishList } = UseContextInProvider();

  return (
    <div className={css.containerFriedSalty}>
      {productFried.map((obj, index) => {
        return (
          <BoxProduct
            labelButton="Adicionar"
            key={index}
            nameProduct={obj.produto}
            valueProduct={obj.valor}
            onClick={() => addItemWishList(obj)}
          />
        );
      })}
    </div>
  );
};

export default FriedSalty;