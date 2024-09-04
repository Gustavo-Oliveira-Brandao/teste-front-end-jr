import styles from "../styles/botoes.module.sass"

function BotaoAba({nome, ehDestaque}:{readonly nome: string, readonly ehDestaque: boolean}){

    return(
        <button className={ehDestaque ? styles.botaoAba + " " + styles.destaqueBotaoAba : styles.botaoAba}>{nome}</button>
    )
}

export default BotaoAba