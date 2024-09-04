import styles from "../styles/Banner.module.sass"
import banner from "../../assets/Banner.png"
import BotaoVerProduto from "../components/BotaoVerProduto"

function Banner(){

    return(
        <div className={styles.banner}>
            <img className={styles.bannerImg} src={banner} alt="" />
            <span className={styles.opacity}></span>
            <p className={styles.chamada}>Venha conhecer nossas promoções</p>
            <p className={styles.desconto}>50% Off nos produtos </p>
            <BotaoVerProduto />
        </div>
    )
}

export default Banner