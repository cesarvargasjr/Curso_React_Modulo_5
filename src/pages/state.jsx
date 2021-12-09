import { useState } from "react"
import Layout from "../components/Layout"
import styles from '../styles/button.module.css'

export default function State() {
    const [numero, setNumber] = useState(0)

    function adicionar() {
        setNumber(numero + 1)
    }

    function subtrair() {
        setNumber(numero - 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            height: '100vh',
            flexWrap: 'wrap'
        }}>
                <div>{numero}</div>
                <button className={styles.button} onClick={adicionar}>+1</button>
                <button className={styles.button} onClick={subtrair}>-1</button>
            </div>
        </Layout>
    )
}