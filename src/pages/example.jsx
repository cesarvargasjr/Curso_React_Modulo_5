/* >>>>> EXEMPLO: PROPRIEDADES DE COMPONENTE <<<<< */

import Header from "../components/Header";

export default function Example() {
    // "props" É SOMENTE LEITRA
    return (
        <div>
            <Header titulo="Next.js & React" />
            <Header titulo="Programação na prática!" />
        </div>
    )
}