import Link from "next/link"
import styles from '../styles/Browser.module.css'

export default function Browser(props) {
    return (
        <Link href={props.destino} passHref> 
            <div className={styles.browser}>
                {props.texto}
            </div>
        </Link>
    )
}