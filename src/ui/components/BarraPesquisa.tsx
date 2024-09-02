import styles from "../styles/BarraPesquisa.module.sass"

function BarraPesquisa() {

    return (
        <input id="buscaHome" className={styles.barraPesquisa} placeholder="O que você está buscando?" />

    )

}

export default BarraPesquisa