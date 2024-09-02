import styles from "../styles/BotaoAbaHeader.module.sass"

function BotaoAbaHeader({titulo, estaDestacado}:{readonly titulo:string, readonly estaDestacado:boolean}){

    return(
        <a href="" className={estaDestacado ? styles.aba + " destaque" : styles.aba}>{titulo}</a>
    )
}

export default BotaoAbaHeader