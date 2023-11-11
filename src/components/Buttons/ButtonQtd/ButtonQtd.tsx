import { useState } from "react";
import css from "./ButtonQtd.module.css"

const ButtonQtd = () => {
  const [value, setValue]= useState(0)
  
  const newValueAdd = () => {
    setValue((prev) => prev + 1);
  };
  const newValueRemove = () => {
    value > 0 ?
      setValue((prev) => prev - 1) 
    :
      setValue(0)
  };

    return (
      <div className={css.containerButtonQtd}>
        <button
          className={css.buttonAdd}
          onClick={newValueAdd}
        >
          +
        </button>
        <h2>{value}</h2>
        <button
          className={css.buttonRemove}
          onClick={newValueRemove}
        >
          -
        </button>
      </div>
    );
}

export default ButtonQtd