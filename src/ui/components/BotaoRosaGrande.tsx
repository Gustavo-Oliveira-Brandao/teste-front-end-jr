import styles from "../styles/botoes.module.sass"

function BotaoRosaGrande({nome}:{readonly nome: string}){

    return(
        <button className={styles.botaoVerProduto}>{nome}</button>
    )
}

export default BotaoRosaGrande