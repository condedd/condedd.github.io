document.addEventListener('DOMContentLoaded', function () {
    const appsList = document.getElementById('apps-list');
    const registerModal = document.getElementById('register-modal');
    const registerButton = document.getElementById('register-button');
    const closeModal = document.getElementById('close-modal');
    const loadingBar = document.getElementById('loading-bar');

    // Genera 16 botones con colores aleatorios
    for (let i = 1; i <= 16; i++) {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        const title = document.createElement('h2');
        title.classList.add('app-title');
        title.textContent = `App ${i}`;

        const description = document.createElement('p');
        description.classList.add('app-description');
        description.textContent = `Descripción de la App ${i}`;

        appCard.appendChild(title);
        appCard.appendChild(description);

        appCard.addEventListener('mouseenter', function () {
            appCard.style.transform = 'scale(1.05)';
            appCard.style.backgroundColor = getRandomColor();
        });

        appCard.addEventListener('mouseleave', function () {
            appCard.style.transform = 'scale(1)';
            appCard.style.backgroundColor = '#363658';
        });

        appsList.appendChild(appCard);
    }

    const developedBy = document.createElement('div');
    developedBy.id = 'developed-by';
    developedBy.textContent = 'Developed by Bread Cracked';
    document.body.appendChild(developedBy);

    registerButton.addEventListener('click', function () {
        registerModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        loadingBar.style.width = '100%';
        setTimeout(() => {
            alert('Usuario registrado exitosamente');
            registerModal.style.display = 'none';
            loadingBar.style.width = '0';
            registerForm.reset();
        }, 1500);
    });

    setInterval(() => {
        const appCards = document.querySelectorAll('.app-card');
        appCards.forEach(appCard => {
            appCard.style.backgroundColor = getRandomColor();
        });
    }, 3000);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
