
import styles from "../styles/TituloSecao.module.sass"

function TituloSecao({titulo, temLinhas}: {readonly titulo: string, readonly temLinhas: boolean}) {

    return(
        <div className={styles.row}>
            {temLinhas ? <span className={styles.linhas}></span> : null}
            <h2 className={styles.titulo}>{titulo}</h2>
            {temLinhas ? <span className={styles.linhas}></span> : null}
        </div>
    )
}

export default TituloSecao