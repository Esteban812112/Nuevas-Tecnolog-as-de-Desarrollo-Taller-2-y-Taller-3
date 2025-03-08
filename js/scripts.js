// Función para agregar un comentario
function addComment() {
    let username = document.getElementById("username").value.trim();
    let commentText = document.getElementById("commentText").value.trim();
    let commentList = document.getElementById("commentList");

    if (username === "" || commentText === "") {
        alert("Por favor, ingresa tu nombre y un comentario.");
        return;
    }

    // Crear un nuevo elemento de lista con el comentario
    let commentItem = document.createElement("li");
    commentItem.classList.add("list-group-item");
    commentItem.innerHTML = `<strong>${username}:</strong> ${commentText}`;

    // Agregar el comentario a la lista
    commentList.appendChild(commentItem);

    // Limpiar los campos después de publicar
    document.getElementById("username").value = "";
    document.getElementById("commentText").value = "";
}
