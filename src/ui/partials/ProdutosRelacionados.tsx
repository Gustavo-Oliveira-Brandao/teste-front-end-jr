import {useEffect, useState} from "react"
import BotaoAba from "../components/BotaoAba"
import Produto from "../components/Produto"
import TituloProdutosRelacionados from "../components/TituloProdutosRelacionados"
import styles from "../styles/ProdutosRelacionados.module.sass"
import produtos from "../../data/services/api"
import anteriorIcon from "../../assets/previous.svg"
import proximoIcon from "../../assets/next.svg"

function ProdutosRelacionados() {

    const [minIndex, setMinIndex] = useState<number>(0)
    const [maxIndex, setMaxIndex] = useState<number>(3)

    let produtosPorPagina = 4

    function anterior(){
        if(minIndex > 0){
            setMinIndex(minIndex-1)
            setMaxIndex(maxIndex-1)
        }
    }

    function proximo(){
        if(maxIndex < produtos.length - 1){
            setMaxIndex(maxIndex +1)
            setMinIndex(minIndex +1)
        }
    }

    return (
        <div className={styles.produtosRelacionados}>
            <TituloProdutosRelacionados/>
            <div className={styles.abasProdutosRelacionados}>
                <BotaoAba nome="Celular" ehDestaque={true}/>
                <BotaoAba nome="Acessórios" ehDestaque={false}/>
                <BotaoAba nome="Tablets" ehDestaque={false}/>
                <BotaoAba nome="Notebooks" ehDestaque={false}/>
                <BotaoAba nome="Tvs" ehDestaque={false}/>
                <BotaoAba nome="Ver todos" ehDestaque={false}/>
            </div>
            <div className={styles.carrosselProdutos}>
                <div className={styles.produtos}>
                    <img className={styles.setaAnterior} src={anteriorIcon} alt="" onClick={anterior} />
                    {produtos.map((produto, index) => (
                            index <= maxIndex && index >= minIndex ?
                                <Produto key={produto.productName} index={index} produto={produto}/> :
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