import Button from "../Buttons/Button/Button"
import Produto from "../../assets/produto1.png"
import css from "./BoxProduct.module.css"
import ButtonQtd from "../Buttons/ButtonQtd/ButtonQtd";

type PropsBoxProduct = {
  nameProduct: string;
  valueProduct: string;
  onClick: () => void;
  labelButton: string
};

const BoxProduct = ({
  nameProduct,
  valueProduct,
  onClick,
  labelButton,
}: PropsBoxProduct) => {
  return (
    <div className={css.container}>
      <img src={Produto} alt="Minha Imagem" className={css.imgProduct} />
      <div className={css.containerData}>
        <h1 className={css.name}>{nameProduct}</h1>
        <div className={css.buttonQtd}>
          <h2 className={css.value}>R$ {valueProduct}</h2>
          <ButtonQtd />
        </div>
        <Button label={labelButton} onClick={onClick} />
      </div>
    </div>
  );
};

export default BoxProduct