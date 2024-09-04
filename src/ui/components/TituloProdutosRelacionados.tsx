
import styles from "../styles/TituloProdutosRelacionados.module.sass"

function TituloProdutosRelacionados(){

    return(
        <div className={styles.row}>
            <span className={styles.linhas}></span>
            <p className={styles.titulo}>Produtos relacionados</p>
            <span className={styles.linhas}></span>
        </div>
    )
}

export default TituloProdutosRelacionados