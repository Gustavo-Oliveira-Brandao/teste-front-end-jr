import CardParceiros from "../components/CardParceiros"
import styles from "../styles/SecaoCards.module.sass"

function SecaoCardsParceiros(){

    return(
        <div className={styles.secaoCards}>
            <CardParceiros descricao="Lorem ipsum dolor sit amet, consectetur" />
            <CardParceiros descricao="Lorem ipsum dolor sit amet, consectetur" />
        </div>
    )
}

export default SecaoCardsParceiros