import Button from "../Buttons/Button/Button"
import Produto from "../../assets/produto1.png"
import css from "./BoxProduct.module.css"

type PropsBoxProduct = {
    nameProduct: string,
    valueProduct: string,
    onClick: () => void,
}

const BoxProduct = ({ nameProduct, valueProduct, onClick } : PropsBoxProduct) => {
    return(
        <div className={css.container}>
            <img src={Produto} alt="Minha Imagem" className={css.imgProduct}/>
            <div className={css.containerData}>
                <h1 className={css.name}>{nameProduct}</h1>
                <h2 className={css.value}>R$ {valueProduct}</h2>
                <Button 
                    label="Adicionar"
                    onClick={onClick}
                />
            </div>
        </div>
    )
}

export default BoxProduct