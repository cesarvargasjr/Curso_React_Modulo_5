// CONTEÚDO DE INTEGRAÇÃO JavaScript / JSX

import Layout from "../components/Layout"

export default function jsx() {
    // EXEMPLO #01
    const a = 5
    const b = 2
    console.log(a*b)
    
    // EXEMPLO #02
    const titulo = <h1>JSX conceito central</h1>
    
    // EXEMPLO #03
    const obj = {nome: 'Cesar', idade: 26}

    // EXEMPLO #04
    function subtitulo() {
        return <h2>{"Teste de texto".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Estudando JSX">
            <div>
                {titulo}
                {subtitulo()}
            <h3>JSX conceito central</h3>
            <h4>{a * b}</h4> 
                <p>
                    {JSON.stringify({nome: 'Cesar', idade: 26})}
                </p>
            </div>
        </Layout>
    )
}