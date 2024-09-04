import styles from "../styles/botoes.module.sass"

function BotaoHeader({icon}:{readonly icon:string}) {

    return (
        <button className={styles.botaoHeader}>
            <img src={icon} alt="" />
        </button>
    )
}

export default BotaoHeader
