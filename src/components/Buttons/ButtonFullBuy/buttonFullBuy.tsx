import css from "./buttonFullBuy.module.css"
import { ShoppingCartOutlined } from '@mui/icons-material';

type Props = {
    label: string
}

const ButtonFullBuy = ({label}: Props) => {
    return(
        <div className={css.container}>
            <div className={css.iconText}>
                <ShoppingCartOutlined   sx={{color: "#000000"}}/>
                <h1 className={css.titleButton}>{label}</h1>
            </div>
            <div className={css.line}></div>
        </div>
    )
}

export default ButtonFullBuy