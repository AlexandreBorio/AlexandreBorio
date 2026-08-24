// Funcionalidade de Alternância de Tema (Claro/Escuro) com Alavanca
const toggleSwitch = document.getElementById('checkbox');
const body = document.body;

toggleSwitch.addEventListener('change', function(event) {
    if (event.target.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

// Validação e Simulação do Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Validação simples de formato de e-mail usando Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
        return;
    }

    // Simulação de envio com sucesso e limpeza dos campos
    alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
    contactForm.reset();
});