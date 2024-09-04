import styles from "../styles/botoes.module.sass"

function BotaoRosaLargo({nome}:{readonly nome: string}){

    return(
        <button className={styles.botaoComprar}>{nome}</button>
    )
}

export default BotaoRosaLargo;