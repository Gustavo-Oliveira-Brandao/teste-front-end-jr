import styles from "../styles/Header.module.sass"
import truckIcon from "../../assets/Truck.svg"
import shieldCheckIcon from "../../assets/ShieldCheck.svg"
import creditCardIcon from "../../assets/CreditCard.svg"
import vtexIcon from "../../assets/VtexLogo.svg"
import boxIcon from "../../assets/Box.svg"
import heartIcon from "../../assets/Heart.svg"
import crownIcon from "../../assets/CrownSimple.svg"
import userIcon from "../../assets/UserCircle.svg"
import cartIcon from "../../assets/ShoppingCart.svg"
import BarraPesquisa from "../components/BarraPesquisa"
import BotaoHeader from "../components/BotaoHeader"
import BotaoAbaHeader from "../components/BotaoAbaHeader"

function Header() {

    return (
        <header>
            <div className={styles.primeiraFileiraHeader + " bordaInferior"}>
                <div className={styles.elementoConfianca}>
                    <img src={shieldCheckIcon} alt="" />
                    <p className={"textoCinza"}>Compra <span className={"destaque"}>100% segura</span></p>
                </div>
                <div className={styles.elementoConfianca}>
                    <img src={truckIcon} alt="" />
                    <p className={"textoCinza"}><span className={"destaque"}>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div className={styles.elementoConfianca}>
                    <img src={creditCardIcon} alt="" />
                    <p className={"textoCinza"}><span className={"destaque"}>Parcele</span> suas compras</p>
                </div>
            </div>
            <div className={styles.segundaFileiraHeader + " bordaInferior"}>
                <img className={styles.vtexLogo} src={vtexIcon} alt="" />
                <BarraPesquisa id="buscaHome" placeholder="O que você está buscando?"/>
                <div className={styles.fileiraBotoes}>
                    <BotaoHeader icon={boxIcon} />
                    <BotaoHeader icon={heartIcon} />
                    <BotaoHeader icon={userIcon} />
                    <BotaoHeader icon={cartIcon} />
                </div>
            </div>
            <div className={styles.terceiraFileiraHeader}>
                <BotaoAbaHeader titulo="Todas categorias" estaDestacado={false} temIcon={false}/>
                <BotaoAbaHeader titulo="Supermercado" estaDestacado={false} temIcon={false} />
                <BotaoAbaHeader titulo="Livros" estaDestacado={false} temIcon={false} />
                <BotaoAbaHeader titulo="Moda" estaDestacado={false} temIcon={false} />
                <BotaoAbaHeader titulo="Lançamentos" estaDestacado={false} temIcon={false} />
                <BotaoAbaHeader titulo="Ofertas do dia" estaDestacado={true} temIcon={false} />
                <BotaoAbaHeader titulo="Assinatura" estaDestacado={false} temIcon={true} icon={crownIcon}/>
            </div>
        </header>
    )
}

export default Header