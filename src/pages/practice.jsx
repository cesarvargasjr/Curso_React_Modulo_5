/* PRATICANDO E FAZENDO ALGUNS TESTES EM UMA NOVA PÁGINA DE NAVEGAÇÃO */

import Layout from "../components/Layout"
import styles from '../styles/button.module.css'

export default function Practice() {

    return (
        <Layout titulo="Cadastro de perfil profissional">
            <form method="post">
                <div className="divCenter">
                    <h1>Cadastro</h1>
                    <div> Nome <input type="text" name="Nome"></input></div>
                    <div> Senha <input type="password" name="Nome"></input></div>
                    <div> Categoria <select>
                        <option value="junior">Junior</option>
                        <option value="pleno">Pleno</option>
                        <option value="senior">Senior</option>
                    </select>
                    </div>
                    <div> <button className={styles.buttonLogin}>Cadastrar</button></div>
                </div>
            </form>
        </Layout>
    )
}