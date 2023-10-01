import { useEffect, useState } from "react"
import BoxProduct from "../../components/BoxProduct/BoxProduct"
import bakedProduct from "../../data/bakedProduct.json";
import css from "./BakedSalted.module.css"

interface Product {
  produto: string;
  valor: string; // Atualizado para string
  img: string;
}

const BakedSalted = () => {
  const [productSelect, setProductSelect] = useState<Product[]>([]);

   const addProduct = (product: Product) => {
     const exists = productSelect.some((p) => p.produto === product.produto);
     if (!exists) {
       setProductSelect((prevProducts) => [...prevProducts, product]);
     }
   };
   
   useEffect(() => {
     localStorage.setItem("meuArray", JSON.stringify(productSelect));
   }, [productSelect]);

  return (
    <div className={css.containerBakedSalted}>
      {bakedProduct.map((obj, index) => {
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
};

export default BakedSalted 
