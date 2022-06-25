const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            email
        })
    })
    .then(resposta => {
        return resposta.body
    })

}

export const clienteService = { 
    listaClientes,
    criaCliente
}