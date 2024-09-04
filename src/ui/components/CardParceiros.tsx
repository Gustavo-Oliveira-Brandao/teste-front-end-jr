import styles from "../styles/Cards.module.sass"
import parceiroBanner from "../../assets/parceiro.png"
import BotaoRosaPequeno from "./BotaoRosaPequeno"

function CardParceiros({descricao} : {readonly descricao: string}) {

    return(
        <div className={styles.parceiro}>
            <img className={styles.parceiroBanner} src={parceiroBanner} alt="" />
            <span className={styles.parceiroOpacity}></span>
            <p className={styles.tituloCard}>Parceiros</p>
            <p className={styles.descricaoCard}>{descricao}</p>
            <BotaoRosaPequeno nome="Confira" />
        </div>
    )
}

export default CardParceiros;