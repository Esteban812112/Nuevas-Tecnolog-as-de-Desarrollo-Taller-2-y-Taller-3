document.addEventListener("DOMContentLoaded", function () {
    console.log("El script se ha cargado correctamente.");

    // Función para redirigir a las páginas de forma segura
    window.irAPagina = function (pagina) {
        if (typeof pagina === "string" && pagina.trim() !== "") {
            console.log(`Redirigiendo a: ${pagina}`);
            window.location.href = pagina;
        } else {
            console.error("Error: la URL proporcionada no es válida.");
        }
    };
});
