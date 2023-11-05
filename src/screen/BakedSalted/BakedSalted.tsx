import BoxProduct from "../../components/BoxProduct/BoxProduct"
import bakedProduct from "../../data/bakedProduct.json";
import css from "./BakedSalted.module.css"
import { UseContextInProvider } from "../../Context/Context";

const BakedSalted = () => {
  const { addItemWishList } = UseContextInProvider()

  return (
    <div className={css.containerBakedSalted}>
      {bakedProduct.map((obj, index) => {
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

export default BakedSalted 
