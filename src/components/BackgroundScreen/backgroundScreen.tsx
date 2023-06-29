import css from "./backgroundScreen.module.css"

const BackgroundScreen = () => {
    return(
        <div className={css.boxTitles}>
            <h2 className={css.textWelcome}>Seja bem vindo</h2>
            <h1 className={css.title}>CcomC<span>Salgados</span>.</h1>
            <h2 className={css.textAdd}>faça seu pedido</h2>
        </div>
    )
}

export default BackgroundScreen