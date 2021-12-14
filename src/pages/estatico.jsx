/* PRÉ-RENDERIZAÇÃO ESTÁTICA UTILIZANDO UMA FUNÇÃO QUE 
MOSTRA NÚMEROS ALEATÓRIOS, PORÉM COMO A RENDERIZAÇÃO É
ESTÁTICA ELE NÃO VAI MUDAR DEPOIS. */

import Layout from '../components/Layout'

export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico() {
    return (
        <Layout titulo="Conteúdo estático">
            <div>
                {Math.random()}
            </div>
        </Layout>
    )
}