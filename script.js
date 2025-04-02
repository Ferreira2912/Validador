function testarEmail() {
    const email = document.getElementById("email").value;
    const resultado = validarEmail(email) ? "✅ E-mail válido" : "❌ E-mail inválido";
    document.getElementById("resultadoEmail").textContent = resultado;
}

function testarSenha() {
    const senha = document.getElementById("senha").value;
    const resultado = validarSenha(senha) ? "✅ Senha válida" : "❌ Senha inválida (mín. 8 caracteres, 1 número, 1 maiúscula)";
    document.getElementById("resultadoSenha").textContent = resultado;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarSenha(senha) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
}