import styles from "../styles/SecaoCards.module.sass"
import CardProdutos from "../components/CardProdutos";

function SecaoCardsProdutos(){

    return(
        <div className={styles.secaoCards + " " + styles.marginTop}>
            <CardProdutos descricao="Lorem ipsum dolor sit amet, consectetur" />
            <CardProdutos descricao="Lorem ipsum dolor sit amet, consectetur" />
        </div>
    )
}

export default SecaoCardsProdutos