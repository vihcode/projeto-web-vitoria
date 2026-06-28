// Aguarda o carregamento do DOM para garantir que os elementos existem em cena
document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("form-contato");
    const statusMensagem = document.getElementById("status-mensagem");

    // Intercepta o evento de envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento padrão da página

        // Captura os valores digitados limpos de espaços extras
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // VALIDAÇÃO OBRIGATÓRIA: Verifica se há campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos do formulário antes de enviar.");
            return;
        }

        // VALIDAÇÃO OBRIGATÓRIA: Expressão regular básica para validar formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).");
            return;
        }

        // SIMULAÇÃO DE ENVIO COM SUCESSO
        // Exibe feedback visual na tela conforme sugerido nas diretrizes
        statusMensagem.innerText = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        
        // Limpa os campos após o envio bem-sucedido
        form.reset();

        // Alerta opcional para garantir a interação imediata com o usuário
        alert("Sucesso! Sua mensagem foi simulada e enviada.");
        
        // Remove a mensagem de texto da tela após 5 segundos
        setTimeout(() => {
            statusMensagem.innerText = "";
        }, 5000);
    });
});
