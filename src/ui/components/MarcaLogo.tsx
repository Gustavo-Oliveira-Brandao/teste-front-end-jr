import Circle from "../../assets/Circle.svg"
import styles from "../styles/botoes.module.sass"
import VtexLogo from "../../assets/vtexLogo.svg"

function MarcaLogo(){

    return(
        <button className={styles.botaoMarca}>
            <img className={styles.marcaCirculo} src={Circle} alt="Marca" />
            <img className={styles.marcaLogo} src={VtexLogo} alt="Logo da marca" />
        </button>
    )
}

export default MarcaLogo