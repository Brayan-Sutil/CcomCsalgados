import { useEffect, useState } from "react"
import BoxProduct from "../../components/BoxProduct/BoxProduct"
import bakedProduct from "../../data/bakedProduct.json";
import css from "./BakedSalted.module.css"

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

const BakedSalted = () => {
  const initialProducts = localStorage.getItem("meuArray")
    ? JSON.parse(localStorage.getItem("meuArray") as string)
    : [];
  const [productSelect, setProductSelect] =
    useState<Product[]>(initialProducts);

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
            onClick={() => addProduct(obj, productSelect, setProductSelect)}
          />
        );
      })}
    </div>
  );
};

export default BakedSalted 
