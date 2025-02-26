document.addEventListener("DOMContentLoaded", function () {
    const asesorias = [
        { asignatura: "Matemáticas", asesor: "Juan Pérez", horario: "10:00 - 11:00 AM" },
        { asignatura: "Programación", asesor: "Ana López", horario: "3:00 - 4:00 PM" },
        { asignatura: "Física", asesor: "Carlos Torres", horario: "5:00 - 6:00 PM" }
    ];

    const tabla = document.getElementById("asesoriasTable");
    const searchInput = document.getElementById("searchInput");

    function renderAsesorias(filter = "") {
        tabla.innerHTML = "";
        asesorias.forEach((asesoria, index) => {
            if (filter === "" || 
                asesoria.asignatura.toLowerCase().includes(filter) || 
                asesoria.asesor.toLowerCase().includes(filter)) {
                const row = `<tr>
                    <td>${asesoria.asignatura}</td>
                    <td>${asesoria.asesor}</td>
                    <td>${asesoria.horario}</td>
                    <td><button class="btn btn-primary btn-sm" onclick="inscribirse(${index})">Inscribirse</button></td>
                </tr>`;
                tabla.innerHTML += row;
            }
        });
    }

    window.inscribirse = function (index) {
        const asesoria = asesorias[index];
        document.getElementById("asesoriaSeleccionada").textContent = `Inscribiéndote en: ${asesoria.asignatura} con ${asesoria.asesor}`;
        const modal = new bootstrap.Modal(document.getElementById("inscripcionModal"));
        modal.show();
    };

    searchInput.addEventListener("input", function () {
        renderAsesorias(this.value.toLowerCase());
    });

    renderAsesorias();
});
