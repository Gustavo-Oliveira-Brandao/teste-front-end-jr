import styles from "../styles/Cards.module.sass"
import produtosBanner from "../../assets/produtos.png"
import BotaoRosaPequeno from "./BotaoRosaPequeno";

function CardProdutos({descricao}:{readonly descricao:string}) {

    return(
        <div className={styles.cardProdutos}>
            <img className={styles.produtoBanner} src={produtosBanner} alt="Produtos" />
            <span className={styles.produtosOpacity} ></span>
            <p className={styles.tituloCard}>Produtos</p>
            <p className={styles.descricaoCard}>{descricao}</p>
            <BotaoRosaPequeno nome="Confira" />
        </div>
    )
}

export default CardProdutos