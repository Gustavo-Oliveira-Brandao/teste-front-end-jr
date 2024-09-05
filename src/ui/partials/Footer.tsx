import styles from "../styles/Footer.module.sass"
import formasPagamentoIcons from "../../assets/formas_pagamento.svg"
import footerLogos from "../../assets/logosFooter.svg"
import CardCadastro from "../components/CardCadastro"

function Footer() {

    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.secaoFooter}>
                    <div className={styles.infoFooter + " " + styles.sobreNos}>
                        <p className={styles.tituloInfo}>Sobre nós</p>
                        <a href="/">Conheça</a>
                        <a href="/">Como comprar</a>
                        <a href="/">Indicação e desconto</a>
                    </div>
                    <div className={styles.infoFooter + " " + styles.informacoesUteis}>
                        <p className={styles.tituloInfo}>INFORMAÇÕES ÚTEIS</p>
                        <a href="/">Fale conosco</a>
                        <a href="/">Dúvidas</a>
                        <a href="/">Prazos de entrega</a>
                        <a href="/">Formas de pagamento</a>
                        <a href="/">Política de privacidade</a>
                        <a href="/">Trocas e devoluções</a>
                    </div>
                    <div className={styles.infoFooter + " " + styles.formasPagamento}>
                        <p className={styles.tituloInfo}>FORMAS DE PAGAMENTO</p>
                        <img src={formasPagamentoIcons} alt="Formas de pagamento" />
                    </div>
                    <CardCadastro />
                </div>
                <div className={styles.secaoCopyright}>
                    <p className={styles.copyrightTexto}>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    <img src={footerLogos} alt="Vtex e Econverse logo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer