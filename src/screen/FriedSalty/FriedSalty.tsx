import { useEffect, useState } from "react";
import css from "./FriedSalty.module.css"
import productFried from "../../data/productFried.json";
import BoxProduct from "../../components/BoxProduct/BoxProduct";

interface Product {
  produto: string;
  valor: string; 
  img: string;
}

const FriedSalty = () => {
   const [productSelect, setProductSelect] = useState<Product[]>([]);
   
   const addProduct = (product: Product) => {
     const exists = productSelect.some((p) => p.produto === product.produto);
     if (!exists) {
        setProductSelect((prevProducts) => [...prevProducts, product]);
      }
    
   };

   useEffect(() => {
      localStorage.setItem("meuArray", JSON.stringify(productSelect));
   },[productSelect])

    return (
      <div className={css.containerFriedSalty}>
        {productFried.map((obj, index) => {
          return (
            <BoxProduct
              labelButton="Adicionar"
              key={index}
              nameProduct={obj.produto}
              valueProduct={obj.valor}
              onClick={() => addProduct(obj)}
            />
          );
        })}
      </div>
    );
}

export default FriedSalty;