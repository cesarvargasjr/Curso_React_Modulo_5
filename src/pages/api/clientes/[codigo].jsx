/*  EXEMPLO DE API RECEBENDO PELA URL 
    http://localhost:3000/api/clientes/123 
    
    SUGESTÃO USAR "JSON VIEWER" 
    
    NAVEGAÇÃO DINÂMICA UTILIZANDO COLCHETES */

export default function handler(req, res) {
    
    const codigo = req.query.codigo
    
    res.status(200).json({
        id: codigo,
        nome: `Cesar ${codigo}`,
        email: `cesarvargasjr${codigo}@email.com`
    })
}