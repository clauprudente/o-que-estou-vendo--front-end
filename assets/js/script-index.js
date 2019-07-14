const botaoLogin = document.querySelector('.btn-login');

botaoLogin.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou no botão do login =)');
    const emailLogin = document.querySelector('.email-login').value;
    const passwordLogin = document.querySelector('.password-login').value;

    console.log(emailLogin, passwordLogin);

    const usuario = {
        "email": emailLogin,
        "senha": passwordLogin
    }

    console.log(JSON.stringify(usuario))

    fetch('https://o-que-estou-vendo-server.herokuapp.com/usuario/login', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'Application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(usuario),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            console.log('Logado!!!! \o/');
            window.location.href = 'perfil.html';

            sessionStorage.setItem('logado', data.token);
        });

})

const botaoCadastro = document.querySelector('.btn-cadastro');

botaoCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou no botão do cadastro =)');
    const emailCadastro = document.querySelector('.email-cadastro').value;
    const passwordCadastro = document.querySelector('.password-cadastro').value;

    const usuario = {
        "email": emailCadastro,
        "senha": passwordCadastro
    }

    fetch('https://o-que-estou-vendo-server.herokuapp.com/usuarios', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'Application/json',
            'Accept': 'application/json'
        }
    }).then(response => console.log(response));
    window.location.reload()
})