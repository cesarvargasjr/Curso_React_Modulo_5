// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* EXEMPLO DE API RECEBENDO PELA URL
   http://localhost:3000/api/hello?nome=joao&idade=20 
   
   SUGESTÃO USAR "JSON VIEWER" */

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Teste API', 
    metodo: req.method,
    params: req.query.nome,
    idade: +req.query.idade
  })
}
