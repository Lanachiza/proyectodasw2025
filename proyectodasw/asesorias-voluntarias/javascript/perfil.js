document.addEventListener("DOMContentLoaded", function() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
        window.location.href = "login.html";
    }

    document.getElementById("nombre").value = usuario.nombre || "";
    document.getElementById("email").value = usuario.email || "";
    document.getElementById("rol").value = usuario.rol || "estudiante";

    document.getElementById("perfilForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        usuario.nombre = document.getElementById("nombre").value;
        localStorage.setItem("usuario", JSON.stringify(usuario));
        
        alert("Perfil actualizado correctamente.");
    });

    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("usuario");
        window.location.href = "login.html";
    });
});
