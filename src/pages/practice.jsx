/* >>>>> PRATICANDO UMA NOVA PÁGINA DE NAVEGAÇÃO <<<<< */

//import Header from "../components/Header"
import Layout from "../components/Layout"
import styles from '../styles/button.module.css'

export default function Practice() {

    return (
        <Layout titulo="Praticando...">
            <div className="divCenter">
                <h1>Apenas praticando uma nova página...</h1>
                    <div> Nome <input type="text" name="Nome"></input></div>
                    <div> Senha <input type="password" name="Nome"></input></div>
                    <div> <button className={styles.buttonLogin}>Login</button></div>
            </div>
        </Layout>   
    )
}