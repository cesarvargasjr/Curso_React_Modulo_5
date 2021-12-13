/* INTEGRAÇÃO COM API UTILIZANDO O "fetch" */

import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [codigo, setCodigo] = useState({})
    const [cliente, setCliente] = useState({})
    
    /* function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    } */

    // FORMA "async" (RELACIONADO AO JavaScript)
    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }

    return (
        <Layout titulo="Integração com API #01">
            <div>
                <input type="number" value={codigo} 
                    onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}> Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id} </li>
                <li>Nome: {cliente.nome} </li>
                <li>E-mail: {cliente.email} </li>
            </ul>
        </Layout>
    )
}