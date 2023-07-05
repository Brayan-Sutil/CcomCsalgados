import css from "./Button.module.css"

type Props = {
    onClick: () => void,
    label: string
}

const Button = ({ onClick, label }: Props) => {
    return(
        <button onClick={onClick} className={css.buttonContainer}>
            <h1 className={css.h1}>
                {label}
            </h1>
        </button>
    )
}

export default Button