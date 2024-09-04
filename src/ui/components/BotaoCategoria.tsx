import styles from "../styles/botoes.module.sass"

function BotaoCategoria({icon, texto, ehDestaque}:{readonly icon:string,readonly texto: string, readonly ehDestaque:boolean}){

    return(
        <div className={styles.divBotaoCategoria}>
            <button className={ehDestaque ? styles.botaoCategoria + " destaque" : styles.botaoCategoria}>
                <img src={icon} alt={texto} />
            </button>
            <p className={ehDestaque ? styles.textoCategoria + " destaque" : styles.textoCategoria}>{texto}</p>
        </div>
    )
}

export default BotaoCategoria