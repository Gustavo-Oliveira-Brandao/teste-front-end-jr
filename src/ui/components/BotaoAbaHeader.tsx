import styles from "../styles/botoes.module.sass"

function BotaoAbaHeader({ titulo, estaDestacado, temIcon, icon } : { readonly titulo: string, readonly estaDestacado: boolean, readonly temIcon: boolean, readonly icon?: string }) {

    return (
        <div className={styles.alinharBotao}>
            {temIcon ? <img src={icon} alt="Icone" /> : null }
            < a href="/" className={estaDestacado ? styles.botaoAbaHeader + " destaque" : styles.botaoAbaHeader} > {titulo}</a >
        </div>
    )
}

export default BotaoAbaHeader