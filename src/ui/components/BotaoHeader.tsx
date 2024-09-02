import styles from "../styles/BotaoHeader.module.sass"

function BotaoHeader({icon}:{readonly icon:string}) {

    return (
        <button className={styles.botao}>
            <img src={icon} alt="" />
        </button>
    )
}

export default BotaoHeader
