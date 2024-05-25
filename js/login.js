document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email: email,
        password: password
    };

    fetch('/login/select', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (response.ok) {
           return window.location.href = '/home';
        } else {
            throw new Error('Usuário ou Senha Inválidos!');
        }
    })
    .then(data => {
        if (data.redirectUrl) {
            // Redireciona para a página /home
            window.location.href = data.redirectUrl;
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert(error.message);
    });
});