const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o tema escuro está ativado no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
  themeToggle.textContent = 'Modo Claro';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDarkMode = body.classList.contains('dark');

  // Atualiza o texto do botão
  themeToggle.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';

  // Salva a preferência do usuário no localStorage
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});