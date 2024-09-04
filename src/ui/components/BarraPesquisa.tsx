import styles from "../styles/BarraPesquisa.module.sass"

function BarraPesquisa({id, placeholder} : {readonly id: string, readonly placeholder : string}) {

    return (
        <input id={id} className={styles.barraPesquisa} placeholder={placeholder} />
    )

}

export default BarraPesquisa