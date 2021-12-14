/* >>>>> PRATICANDO UMA NOVA PÁGINA DE NAVEGAÇÃO <<<<< */

//import Header from "../components/Header"
import Layout from "../components/Layout"
import styles from '../styles/button.module.css'

export default function Practice() {

    return (
        <Layout titulo="Cadastro de perfil profissional">
            <form method="post" className="center">

                <h1>Cadastro</h1>
                Nome <input type="text" name="nome" />
                Idade <input type="number" name="idade" />
                Pretenção Salarial <input type="number" name="salario" />
                Telefone <input type="tel" name="telefone"></input>
                E-mail <input type="email" name="e-mail" placeholder="digite seu e-mail aqui" />
                Categoria <select>
                    <option value="junior">Junior</option>
                    <option value="pleno">Pleno</option>
                    <option value="senior">Senior</option>
                </select>
                Curriculum <input type="file" name="arquivos" multiple />
                <button className={styles.buttonLogin}>Cadastrar</button>
            </form>
        </Layout>
    )
}