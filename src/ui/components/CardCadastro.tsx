import styles from "../styles/Cards.module.sass"
import Input from "./Input"
import stylesBotao from "../styles/botoes.module.sass"

function CardCadastro() {

    return (
        <div className={styles.cardCadastro}>
            <h3 className={styles.tituloCardCadastro}>Cadastre-se e Receba nossas <strong>novidades e promoções</strong></h3>
            <p className={styles.descricaoCardCadastro}>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
            <div>
                <Input placeholder="SEU E-MAIL" />
                <button className={stylesBotao.botaoQuadradoPequeno}>OK</button>
            </div>
        </div>
    )
}

export default CardCadastro