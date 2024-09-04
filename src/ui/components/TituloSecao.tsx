
import styles from "../styles/TituloSecao.module.sass"

function TituloSecao({titulo, temLinhas}: {readonly titulo: string, readonly temLinhas: boolean}) {

    return(
        <div className={styles.row}>
            {temLinhas ? <span className={styles.linhas}></span> : null}
            <p className={styles.titulo}>{titulo}</p>
            {temLinhas ? <span className={styles.linhas}></span> : null}
        </div>
    )
}

export default TituloSecao