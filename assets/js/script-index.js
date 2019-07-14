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

    fetch('http://localhost:3000/usuario/login', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'Application/json'
        }
    }).then(response => {
        if (response.status == 200) {
            // window.location.href = "file:///C:/Users/Claudia/Desktop/Claudia/o-que-estou-vendo--front-end/perfil.html";
            console.log(response);
        } else {
            console.log('nops')
        }

    });

})

const botaoCadastro = document.querySelector('.btn-cadastro');

botaoCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou no botão do cadastro =)');
    const emailCadastro = document.querySelector('.email-cadastro').value;
    const passwordCadastro = document.querySelector('.password-cadastro').value;

    console.log(emailCadastro, passwordCadastro);

    const usuario = {
        "email": emailCadastro,
        "senha": passwordCadastro
    }

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'Application/json'
        }
    }).then(response => console.log("Criado! =)"));
    window.location.reload()
})