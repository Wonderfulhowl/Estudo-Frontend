const switcher = document.querySelector('.btn');

// Configuração inicial para garantir que o tema claro seja o padrão
document.body.classList.add('light-theme'); 

switcher.addEventListener('click', function() {
    // Alterna entre as classes de tema
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Verifica se o tema é escuro ou claro e altera o texto do botão
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light"; // Se o tema for dark, o botão diz "Light"
    } else {
        this.textContent = "Dark"; // Se o tema for light, o botão diz "Dark"
    }
});