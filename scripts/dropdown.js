document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо всі колонки з випадаючими списками
    const dropdownColumns = document.querySelectorAll('.links-column.dropdown-enabled');
    
    dropdownColumns.forEach(column => {
        const header = column.querySelector('h2');
        const ul = column.querySelector('ul');
        
        // Додаємо обробник кліку на заголовок
        header.addEventListener('click', function() {
            // Перемикаємо стан списку
            if (ul.classList.contains('collapsed')) {
                ul.classList.remove('collapsed');
                ul.classList.add('expanded');
                column.classList.add('active');
            } else {
                ul.classList.remove('expanded');
                ul.classList.add('collapsed');
                column.classList.remove('active');
            }
        });
    });
});