import css from "./About.module.css"

const About = () => {
    return (
      <div className={css.containerAbout}>
          <h2>Horario de funcionamento:</h2>
        <div className={css.aboutList}>
          <div>
            <li>SEGUNDA - 07:00 ás 19:00</li>
            <li>TERÇA - 07:00 ás 19:00</li>
            <li>QUARTA - 07:00 ás 19:00</li>
            <li>QUINTA - 07:00 ás 19:00</li>
            <li>SEXTA - 07:00 ás 19:00</li>
            <li>SÀBADO - 07:00 ás 18:00</li>
            <li>DOMINGO - 07:00 ás 14:00</li>
          </div>
        </div>
          <h2>Formas de Pagamento:</h2>
        <div className={css.aboutList}>
          <div>
            <li>Cartão de débito</li>
            <li>Cartão de crédito</li>
            <li>Pix - celular </li>
            <li>Dinheito</li>
          </div>
        </div>
          <h2>Nosso endereço:</h2>
        <div className={css.aboutList}>
          <div>
            <li>Av. visconde de Taunay</li>
            <li>Ronda - Ponta Grossa - PR</li>
          </div>
        </div>
      </div>
    );
}

export default About