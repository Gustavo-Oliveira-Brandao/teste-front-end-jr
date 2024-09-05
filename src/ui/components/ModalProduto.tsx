import { useState } from "react"
import { Product } from "../../data/@types/Product"
import BotaoRosaLargo from "./BotaoRosaLargo"
import styles from "../styles/Modal.module.sass"
import minusIcon from "../../assets/minus.svg"
import plusIcon from "../../assets/plus.svg"
import crossIcon from "../../assets/Cross.svg"

function ModalProduto({ produto, abrirModal }: { readonly produto: Product, abrirModal:any }) {

    const [quantidade, setQuantidade] = useState<number>(1)

    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    function alterarQuantidade(ehAumento : boolean){
        if(ehAumento){
            setQuantidade(quantidade + 1)
        }
        if(!ehAumento && quantidade > 0){
            setQuantidade(quantidade - 1)
        }
    }

    return (

        <div className={styles.modalProduto}>
            <img onClick={() => abrirModal(false)} className={styles.cross} src={crossIcon} alt="Fechar" />
            <img className={styles.imagemProduto} src={produto.photo} alt={produto.productName} />
            <div className={styles.infoProdutoModal}>
                <p className={styles.nomeProdutoModal}>{produto.productName}</p>
                <p className={styles.precoProdutoModal}>{currency.format(produto.price)}</p>
                <p className={styles.descricaoProdutoModal}>{produto.descriptionShort}</p>
                <a className={styles.botaoVejaMaisModal} href="/">Veja mais detalhes do produto {'>'}</a>
                <div className={styles.alternarQuantidade}>
                    <img onClick={() => alterarQuantidade(false)} src={minusIcon} alt="" />
                    <p>{quantidade}</p>
                    <img onClick={() => alterarQuantidade(true)} src={plusIcon} alt="" />
                </div>
                <BotaoRosaLargo nome="Comprar" />
            </div>
        </div>

    )
}

export default ModalProduto