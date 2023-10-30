import { useEffect, useState } from "react";
import css from "./FriedSalty.module.css"
import productFried from "../../data/productFried.json";
import BoxProduct from "../../components/BoxProduct/BoxProduct";

interface Product {
  produto: string;
  valor: string; 
  img: string;
}

const addProduct = (
  product: Product,
  productSelectProps: Product[],
  setProductSelectFunc: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  const exists = productSelectProps.some((p) => p.produto === product.produto);
  if (!exists) {
    setProductSelectFunc((prevProducts) => [...prevProducts, product]);
  }
};

const FriedSalty = () => {
   const initialProducts = localStorage.getItem("meuArray")
     ? JSON.parse(localStorage.getItem("meuArray") as string) : [];
   const [productSelect, setProductSelect] = useState<Product[]>(initialProducts);

   useEffect(() => {
     localStorage.setItem("meuArray", JSON.stringify(productSelect));
   }, [productSelect]);

    return (
      <div className={css.containerFriedSalty}>
        {productFried.map((obj, index) => {
          return (
            <BoxProduct
              labelButton="Adicionar"
              key={index}
              nameProduct={obj.produto}
              valueProduct={obj.valor}
              onClick={() => addProduct(obj, productSelect, setProductSelect)}
            />
          );
        })}
      </div>
    );
}

export default FriedSalty;