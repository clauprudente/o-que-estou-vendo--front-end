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
        })
        .catch(erro => {
            console.log(erro)
        })

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
        }).then(response => response.json())
        .then(data => {
            window.location.reload();
        }).catch(erro => {
            console.log(erro)
        })
})

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
console.log(addBtn);

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      console.log("Teste")
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
  });