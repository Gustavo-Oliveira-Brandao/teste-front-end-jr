import TituloSecao from "../ui/components/TituloSecao"
import Banner from "../ui/partials/Banner"
import Categorias from "../ui/partials/Categorias"
import Header from "../ui/partials/Header"
import ProdutosRelacionados from "../ui/partials/ProdutosRelacionados"
import SecaoCardsParceiros from "../ui/partials/SecaoCardsParceiros"
import styles from "../ui/styles/botoes.module.sass"
import SecaoCardsProdutos from "../ui/partials/SecaoCardsProdutos";
import SecaoMarcas from "../ui/partials/SecaoMarcas";

function Home() {

    return (
        <div>
            <Header/>
            <Banner/>
            <Categorias/>
            <ProdutosRelacionados/>
            <SecaoCardsParceiros/>
            <TituloSecao titulo="Produtos relacionados" temLinhas={true}/>
            <div className={styles.alinharBotao}>
                <a href="/" className={styles.botaoVerTodos}>Ver todos</a>
            </div>
            <SecaoCardsProdutos />
            <TituloSecao titulo="Navegue por marcas" temLinhas={false} />
            <SecaoMarcas />
        </div>
    )
}

export default Home