/* EXEMPLO PARA MOSTRAR QUE UM ARQUIVO DENTRO DE UMA PASTA
TAMBÉM É ACESSADO POR APENA UMA "/" NO "index.jsx", PORQUE ESTÁ DENTRO DE PAGES */

import Layout from '../../components/Layout'

export default function Navegacao() {
    return (
        <Layout titulo="Exemplo navegação #01">
            <h1>Browser #01</h1>
        </Layout>
    )
}