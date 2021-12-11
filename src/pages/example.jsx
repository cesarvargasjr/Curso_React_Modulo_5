/* >>>>> EXEMPLO: PROPRIEDADES DE COMPONENTE <<<<< */

import Header from "../components/Header"
import Layout from "../components/Layout"

export default function Example() {
    // "props" É SOMENTE LEITURA
    return (
        <Layout titulo="Exemplo usando componentes">
            <Header titulo="Next.js & React" />
            <Header titulo="Programação na prática!" />
        </Layout>
    )
}