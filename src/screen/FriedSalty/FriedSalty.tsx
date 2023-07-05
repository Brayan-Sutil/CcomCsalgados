import { useState } from "react";
import css from "./FriedSalty.module.css"
import productFried from "../../data/productFried.json";
import BoxProduct from "../../components/BoxProduct/BoxProduct";

const FriedSalty = () => {
    const [productSelect, setProductSelect] = useState<string>();
    console.log(productSelect);

    return (
      <div className={css.containerFriedSalty}>
        {productFried.map((obj, index) => {
          return (
            <BoxProduct
              key={index}
              nameProduct={obj.produto}
              valueProduct={obj.valor}
              onClick={() => {
                setProductSelect(obj.produto);
              }}
            />
          );
        })}
      </div>
    );
}

export default FriedSalty;