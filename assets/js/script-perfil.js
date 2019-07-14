fetch('http://localhost:3000/usuario/filmes', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('logado')}`,
            'Access-Control-Allow-Origin': "*",
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })