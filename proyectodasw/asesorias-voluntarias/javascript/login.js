document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    const usuarioEjemplo = { email: "usuario@ejemplo.com", password: "12345" };

    if (email === usuarioEjemplo.email && password === usuarioEjemplo.password) {
        localStorage.setItem("usuario", JSON.stringify({ email }));
        window.location.href = "asesorias.html"; 
    } else {
        errorMessage.style.display = "block";
    }
});
