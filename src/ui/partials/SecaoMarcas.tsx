import MarcaLogo from "../components/MarcaLogo";
import styles from "../styles/SecaoCards.module.sass"
import stylesBotao from "../styles/botoes.module.sass"
import proximoIcon from "../../assets/next circle.svg"

function SecaoMarcas(){

    return(
        <div className={styles.secaoMarcas}>
            <MarcaLogo />
            <MarcaLogo />
            <MarcaLogo />
            <MarcaLogo />
            <MarcaLogo />
            <button className={stylesBotao.setaProximoCirculo}>
                <img src={proximoIcon} alt="Proxima marca" />
            </button>
        </div>
    )
}

export default SecaoMarcas;