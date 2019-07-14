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

    fetch('http://localhost:3000/usuario/login', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'Application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(usuario),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            console.log('Logado!!!! \o/');
            setCookie('logado', data.token)
        });

})

const botaoCadastro = document.querySelector('.btn-cadastro');

botaoCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou no botão do cadastro =)');
    const emailCadastro = document.querySelector('.email-cadastro').value;
    const passwordCadastro = document.querySelector('.password-cadastro').value;

    // console.log(emailCadastro, passwordCadastro);

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
    }).then(response => console.log(response));
    // window.location.reload()
})

const setCookie = (name, value, duration) => {
    let cookie = name + "=" + escape(value) +
        ((duration) ? "; duration=" + duration.toGMTString() : "");

    document.cookie = cookie;
}

const getCookie = (name) => {
    let cookies = document.cookie;
    let prefix = name + "=";
    let begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {
        begin = cookies.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;
    }
    let end = cookies.indexOf(";", begin);
    if (end == -1) {
        end = cookies.length;
    }
    return unescape(cookies.substring(begin + prefix.length, end));
}