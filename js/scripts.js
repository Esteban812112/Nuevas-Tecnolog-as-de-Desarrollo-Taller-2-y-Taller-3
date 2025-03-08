document.addEventListener("DOMContentLoaded", function () {
    const addCommentBtn = document.getElementById("addCommentBtn");
    const clearCommentsBtn = document.getElementById("clearCommentsBtn");
    const commentList = document.getElementById("commentList");

    // Cargar comentarios almacenados
    loadComments();

    // Evento para agregar comentario
    addCommentBtn.addEventListener("click", addComment);

    // Evento para limpiar comentarios
    clearCommentsBtn.addEventListener("click", clearComments);

    function addComment() {
        let username = document.getElementById("username").value.trim();
        let commentText = document.getElementById("commentText").value.trim();

        if (username === "" || commentText === "") {
            alert("Por favor, ingresa tu nombre y un comentario.");
            return;
        }

        // Crear elemento de lista
        let commentItem = document.createElement("li");
        commentItem.classList.add("list-group-item");
        commentItem.innerHTML = `<strong>${username}:</strong> ${commentText}`;

        // Agregar comentario a la lista
        commentList.appendChild(commentItem);

        // Guardar en localStorage
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({ username, commentText });
        localStorage.setItem("comments", JSON.stringify(comments));

        // Limpiar inputs
        document.getElementById("username").value = "";
        document.getElementById("commentText").value = "";
    }

    function clearComments() {
        localStorage.removeItem("comments");
        commentList.innerHTML = "";
    }

    function loadComments() {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.forEach(comment => {
            let commentItem = document.createElement("li");
            commentItem.classList.add("list-group-item");
            commentItem.innerHTML = `<strong>${comment.username}:</strong> ${comment.commentText}`;
            commentList.appendChild(commentItem);
        });
    }
});
