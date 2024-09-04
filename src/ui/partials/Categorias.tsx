import tecnologiaIcon from "../../assets/monitorar-tablet-e-smartohone 1.svg"
import modaIcon from "../../assets/moda 1.svg"
import superMercadoIcon from "../../assets/supermercados 1.svg"
import corridaIcon from "../../assets/corrida 1.svg"
import saudeIcon from "../../assets/cuidados-de-saude 1.svg"
import ferramentasIcon from "../../assets/ferramentas 1.svg"
import whiskeyIcon from "../../assets/whiskey.svg"
import styles from "../styles/Categorias.module.sass"
import BotaoCategoria from "../components/BotaoCategoria"

function Categorias(){
    
    return(
        <div className={styles.categorias}>
            <BotaoCategoria icon = {tecnologiaIcon} texto="Tecnologia" ehDestaque={true} />
            <BotaoCategoria icon = {superMercadoIcon} texto="Supermercado" ehDestaque={false} />
            <BotaoCategoria icon = {whiskeyIcon} texto="Bebidas" ehDestaque={false} />
            <BotaoCategoria icon = {ferramentasIcon} texto="Ferramentas" ehDestaque={false} />
            <BotaoCategoria icon = {saudeIcon} texto="Saúde" ehDestaque={false} />
            <BotaoCategoria icon = {corridaIcon} texto="Esportes e Fitness" ehDestaque={false} />
            <BotaoCategoria icon = {modaIcon} texto="Moda" ehDestaque={false} />
        </div>
    )
}

export default Categorias