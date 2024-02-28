document.addEventListener('DOMContentLoaded', function () {
    // Cargar el encabezado
    console.log("Llega")
    fetch('../page/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data);

    // Cargar el pie de página
    fetch('../page/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);
});
