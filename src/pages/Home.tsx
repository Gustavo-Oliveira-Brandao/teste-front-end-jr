import TituloSecao from "../ui/components/TituloSecao"
import Banner from "../ui/partials/Banner"
import Categorias from "../ui/partials/Categorias"
import Header from "../ui/partials/Header"
import ProdutosRelacionados from "../ui/partials/ProdutosRelacionados"
import SecaoCardsParceiros from "../ui/partials/SecaoCardsParceiros"
import styles from "../ui/styles/botoes.module.sass"
import SecaoCardsProdutos from "../ui/partials/SecaoCardsProdutos";
import SecaoMarcas from "../ui/partials/SecaoMarcas";
import Footer from "../ui/partials/Footer"
import { useState } from "react"
import opacity from "../ui/styles/OpacityController.module.sass"
import produtos from "../data/services/api"
import ModalProduto from "../ui/components/ModalProduto"

function Home() {

    const [modalEstaAberto, setModalEstaAberto] = useState<boolean>(false)
    const [indexAtual, setIndexAtual] = useState<number>(0)

    function gerenciarModal(ehPraAbrir:boolean, index?:number){
        if(ehPraAbrir) {
            setModalEstaAberto(true)
            setIndexAtual(Number(index))
        }
        if(!ehPraAbrir){
            setModalEstaAberto(false)
        }
    }

    return (
        <div>
            {modalEstaAberto ? <div className={opacity.opacity}></div> : null}
            <Header/>
            <Banner/>
            <Categorias/>
            <ProdutosRelacionados abrirModal={gerenciarModal} modalEstaAberto={modalEstaAberto}/>
            <SecaoCardsParceiros/>
            <TituloSecao titulo="Produtos relacionados" temLinhas={true}/>
            <div className={styles.alinharBotao}>
                <a href="/" className={styles.botaoVerTodos}>Ver todos</a>
            </div>
            <SecaoCardsProdutos />
            <TituloSecao titulo="Navegue por marcas" temLinhas={false} />
            <SecaoMarcas />
            <Footer />
            
            {
                modalEstaAberto ? <ModalProduto produto={produtos[indexAtual]} abrirModal={gerenciarModal} /> : null
            }

        </div>
    )
}

export default Home