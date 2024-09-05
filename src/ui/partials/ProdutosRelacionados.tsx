import { useState } from "react"
import BotaoCategoriaProdutos from "../components/BotaoCategoriaProdutos"
import Produto from "../components/Produto"
import TituloSecao from "../components/TituloSecao"
import styles from "../styles/ProdutosRelacionados.module.sass"
import produtos from "../../data/services/api"
import anteriorIcon from "../../assets/previous.svg"
import proximoIcon from "../../assets/next.svg"
import stylesBotao from "../styles/botoes.module.sass"

function ProdutosRelacionados({abrirModal, modalEstaAberto}:{readonly abrirModal:any, readonly modalEstaAberto : boolean}) {

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
                <button onClick={anterior} className={stylesBotao.setaAnterior}>
                    <img src={anteriorIcon} alt="Produto anterior" />
                </button>
                <div className={styles.produtos}>
                    {produtos.map((produto, index) => (
                        index <= maxIndex && index >= minIndex ?
                            <Produto key={produto.productName} index={index} produto={produto} abrirModal={abrirModal} modalEstaAberto={modalEstaAberto}/>
                            :
                            null
                    )
                    )}
                </div>
                <button onClick={proximo} className={stylesBotao.setaProximo}>
                    <img src={proximoIcon} alt="Proximo produto" />
                </button>
            </div>
        </div>
    )
}

export default ProdutosRelacionados