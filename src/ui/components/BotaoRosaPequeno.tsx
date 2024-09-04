import styles from "../styles/botoes.module.sass"

function BotaoRosaPequeno({nome}:{readonly nome: string}){

    return(
        <button className={styles.botaoConfira}>{nome}</button>
    )
}

export default BotaoRosaPequeno