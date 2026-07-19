// Функция для загрузки и вставки HTML-кода
function includeHTML(targetId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Вызываем функцию для каждого файла после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header-container", "header.html");
    includeHTML("nav-container", "nav.html");
    includeHTML("footer-container", "footer.html");
});
