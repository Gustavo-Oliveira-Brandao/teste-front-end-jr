import { useState } from "react"
import BotaoCategoriaProdutos from "../components/BotaoCategoriaProdutos"
import Produto from "../components/Produto"
import TituloSecao from "../components/TituloSecao"
import styles from "../styles/ProdutosRelacionados.module.sass"
import produtos from "../../data/services/api"
import anteriorIcon from "../../assets/previous.svg"
import proximoIcon from "../../assets/next.svg"

function ProdutosRelacionados() {

    const [minIndex, setMinIndex] = useState<number>(0)
    const [maxIndex, setMaxIndex] = useState<number>(3)

    function anterior() {
        if (minIndex > 0) {
            setMinIndex(minIndex - 1)
            setMaxIndex(maxIndex - 1)
        }
    }

    function proximo() {
        if (maxIndex < produtos.length - 1) {
            setMaxIndex(maxIndex + 1)
            setMinIndex(minIndex + 1)
        }
    }

    return (
        <div className={styles.produtosRelacionados}>
            <TituloSecao titulo="Produtos relacionados" temLinhas={true} />
            <div className={styles.abasProdutosRelacionados}>
                <BotaoCategoriaProdutos nome="Celular" ehDestaque={true} />
                <BotaoCategoriaProdutos nome="Acessórios" ehDestaque={false} />
                <BotaoCategoriaProdutos nome="Tablets" ehDestaque={false} />
                <BotaoCategoriaProdutos nome="Notebooks" ehDestaque={false} />
                <BotaoCategoriaProdutos nome="Tvs" ehDestaque={false} />
                <BotaoCategoriaProdutos nome="Ver todos" ehDestaque={false} />
            </div>
            <div className={styles.carrosselProdutos}>
                <div className={styles.produtos}>
                    <img className={styles.setaAnterior} src={anteriorIcon} alt="" onClick={anterior} />
                    {produtos.map((produto, index) => (
                        index <= maxIndex && index >= minIndex ?
                            <Produto key={produto.productName} index={index} produto={produto} /> :
                            null
                    )
                    )}
                    <img className={styles.setaProximo} src={proximoIcon} alt="" onClick={proximo} />
                </div>
            </div>
        </div>
    )
}

export default ProdutosRelacionados