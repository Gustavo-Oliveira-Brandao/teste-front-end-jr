import styles from "../styles/botoes.module.sass"

function BotaoAbaHeader({titulo, estaDestacado}:{readonly titulo:string, readonly estaDestacado:boolean}){

    return(
        <a href="/" className={estaDestacado ? styles.botaoAbaHeader + " destaque" : styles.botaoAbaHeader}>{titulo}</a>
    )
}

export default BotaoAbaHeader