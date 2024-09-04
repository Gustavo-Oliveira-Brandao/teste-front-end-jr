import Banner from "../ui/partials/Banner"
import Categorias from "../ui/partials/Categorias"
import Header from "../ui/partials/Header"
import ProdutosRelacionados from "../ui/partials/ProdutosRelacionados"

function Home(){

    return(
        <div>
            <Header />
            <Banner />
            <Categorias />
            <ProdutosRelacionados />
        </div>
    )
}

export default Home