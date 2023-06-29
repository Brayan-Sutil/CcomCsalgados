import { useState } from "react"
import BoxProduct from "../../components/BoxProduct/BoxProduct"
import bakedProduct from "../../data/bakedProduct.json";
import css from "./BakedSalted.module.css"

const BakedSalted = () => {
    const [productSelect, setProductSelect] = useState<string>()
    console.log(productSelect)

    return (
      <div className={css.containerBakedSalted}>
        {bakedProduct.map((obj, index) => {
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

export default BakedSalted 
