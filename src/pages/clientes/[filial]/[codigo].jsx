/* EXEMPLO DE NAVEGAÇÃO DINÂMICA UTILIZANDO COLCHETES NO ARQUIVO */

import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'

export default function Cliente() {
    const router = useRouter()

    /* useEffect(() => {
        console.log(router.query.codigo)
    }, []) */

    return (
        <Layout titulo="Exemplo NAVEGAÇÃO DINÂMICA">
            <div>Código: {router.query.codigo}</div>
            <div>Filial: {router.query.filial}</div>
        </Layout>
    )
}