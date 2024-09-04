import styles from "../styles/Produto.module.sass"
import BotaoRosaLargo from "./BotaoRosaLargo";
import {Product} from "../../data/@types/Product";

function Produto({index, produto}: {readonly index: number, readonly produto: Product }) {

    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <div id={"produto" + index} className={styles.produto}>
            <img className={styles.fotoProduto} src={produto.photo} alt={produto.productName}/>
            <div className={styles.infoProduto}>
                <p className={styles.nomeProduto}>{produto.productName}</p>
                <p className={styles.precoOriginal}>{currency.format(produto.price * 1.1)}</p>
                <p className={styles.precoAtual}>{currency.format(produto.price)}</p>
                <p className={styles.textoParcelas}>Ou 2x de {currency.format(produto.price / 2)} sem juros</p>
                <p className={styles.textoFrete}>Frete grátis</p>
            </div>
            <div className={styles.alinharBotao}>
                <BotaoRosaLargo nome="Comprar"/>
            </div>
        </div>
    )
}

export default Produto