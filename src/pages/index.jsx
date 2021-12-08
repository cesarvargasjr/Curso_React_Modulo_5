import Browser from '../components/Browser'

export default function Start() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            {/* PÁGINA INICIAL DO APP */}
            <Browser texto="Exemplo" destino="/example"/> {/* PÁGINA EXEMPLO */}
            <Browser texto="Página teste" destino="/pageTest"/> {/* PÁGINA CSS MODULAR */}
            <Browser texto="Jsx" destino="/jsx"/> {/* PÁGINA EXEMPLO JSX */}
            <Browser texto="Navegação #01" destino="/navegacao"/> {/* PÁGINA EXEMPLO BROWSER */}
            <Browser texto="Navegação #02" destino="/clientes/RS-01/12345"/> {/* PÁGINA EXEMPLO NAVEÇÃO DINÂMICA */}
        </div>
    )
}