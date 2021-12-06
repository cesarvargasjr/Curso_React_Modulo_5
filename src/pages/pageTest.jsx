/* >>>>> EXEMPLO PARA USAR CSS MODULAR <<<<< */

import styles from '../styles/pageTest.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function PageTest() {
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.default}>   {/* PARA USAR ESSE CSS MODULAR É PRECISO USAR AS "{}" " */}
                <h1>Página de teste CSS modular</h1>
            </div>
        </Layout>
    )
}