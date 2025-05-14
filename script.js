let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides(); // Запустить функцию показа слайдов

document.addEventListener('DOMContentLoaded', function () {
    // Переменные для хранения учетных данных пользователей
    const users = [];

    // Загрузка и разбор файла "Account.txt"
    fetch('Account.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            lines.forEach(line => {
                const [username, password] = line.split(','); // Разбиваем строку на логин и пароль
                // Удалить символ возврата каретки из пароля
                users.push({ username, password: password.replace('\r', '') });
            });
        });

    // Функция для проверки учетных данных
    function checkCredentials(username, password) {
        return users.some(user => user.username === username && user.password === password);
    }

    // Получение элементов DOM
    document.getElementById('user-actions');
    document.getElementById('login-form-container');
    document.getElementById('logout-button');
    document.getElementById('logged-in-user');
// Добавление слушателя событий для кнопки "Войти"
    document.getElementById('login-submit').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('login-form-container').style.display = 'block';
        document.getElementById('login-submit').style.display = 'none'; // Скрыть кнопку "Войти"
    });

// Добавление слушателя событий для кнопки "Войти" в форме входа
    document.getElementById('login-button').addEventListener('click', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkCredentials(username, password)) {
            // Успешный вход, скрыть форму входа
            document.getElementById('login-form-container').style.display = 'none';

            // Отобразить информацию о входе и кнопку "Выйти"
            document.getElementById('user-info').style.display = 'inline';
            document.getElementById('logged-in-user').textContent = username; // Вывести имя пользователя
            document.getElementById('logout-button').style.display = 'inline';

            // Отобразить скрытый контент
            document.getElementById('protected-content').style.display = 'block'; // Добавьте эту строку

            // После успешного входа
            document.getElementById('user-actions').style.display = 'block';

        } else {
            // Неверные учетные данные, показать сообщение об ошибке или предупреждение
            alert('Неверное имя пользователя или пароль');
        }
    });

// Добавление слушателя событий для кнопки "Выйти"
    document.getElementById('logout-button').addEventListener('click', function () {
        // Очистить введенные данные
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';

        // Скрыть информацию о входе и кнопку "Выйти"
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('logout-button').style.display = 'none';

        // Скрыть контент
        document.getElementById('protected-content').style.display = 'none';

        // Показать кнопку "Войти"
        document.getElementById('login-submit').style.display = 'block';
    });

});

// Создание массива с базой знаний
const knowledgeBase = [
    {
        title: "Инструкция по использованию сайта",
        content: "Эта инструкция предназначена для сотрудников, чтобы они могли эффективно использовать наш сайт \"JDM Legend\". Ниже вы найдете пошаговое руководство по основным функциям сайта.",
        googleDriveLink: "https://docs.google.com/document/d/1zlRMO2UXR_idtcoQIkFD9TmSQcO-AGTOjcAu5Iwdy6E/edit?usp=drive_link"
    },
    {
        title: "Автоновости",
        content: "Здесь вы найдете различные новости и ссылки на сайты, где можно посмотреть новости о машинах.",
        googleDriveLink: "https://docs.google.com/document/d/13EkbBAT2BGKYlVjaGNzEKemBP3okyf6-tN8XCgvSBfI/edit?usp=drive_link"
    },
    {
        title: "Автопарк(База данных машин)",
        content: "Обширная база данных с информацией о автомобилях, включая технические характеристики.",
        googleDriveLink: "https://drive.google.com/drive/u/2/folders/1IpenFEPekfdN8FTqHxKKLZ0qE5Nm7_pG"
    },
    {
        title: "Информация о базе данных(Автопарк)",
        content: "Здесь вы найдете информацию о количестве моделей в автопарке",
        googleDriveLink: "https://drive.google.com/file/d/1DkrmFTBvlGWOKWDyYQCH_zE9Csfp4tGj/view?usp=drive_link",
    },
    {
        title: "Инструкция по использованию базы знаний на сайте \"JDM Legend\"",
        content: "База знаний - это ценный ресурс, который поможет вам получить доступ к важной информации и ресурсам, необходимым для успешной работы нашей компании. ",
        googleDriveLink: "https://docs.google.com/document/d/11dkUNJRjCQxWjYmop27NAkfpWyThoBnW4KdLKwIe1as/edit?usp=drive_link"
    },
    {
        title: "Статьи, раскрывающие историю и развитие японской автомобильной индустрии",
        content: "Вы можете перейти по ссылкам, чтобы прочитать более подробную информацию о каждой из этих статей и углубиться в историю и развитие японской автомобильной индустрии.",
        googleDriveLink: "https://docs.google.com/document/d/1pV3XUB0XOuBqudI_F0cdn63e9AAsVyPp_1uWMhBwAkk/edit?usp=drive_link"
    },
    {
        title: "Информация о команде",
        content: "Можно найти информацию о сотрудниках.",
        googleDriveLink: "https://docs.google.com/document/d/1qVO95w_qMunLvALraEHDGkM1YsGEI1HyNBhon8tmrQs/edit?usp=drive_link"
    },
    {
        title: "Форум и Обсуждение",
        content: "Вы можете общаться с сотрудниками и единомышлинниками.",
        Link: "https://t.me/+VCalVYwbaypiM2Uy"
    },
    {
        title: "Материалы для обмена знаний и опытом среди сообщества автолюбителей",
        content: "Ссылки на всю информацию",
        googleDriveLink: "https://docs.google.com/document/d/1Qo-p1FBQ0kg6AxsjMaQOFY-HuNwvMVi8YB4z3YVq7N8/edit?usp=drive_link"
    },
    {
        title: "Обзоры легендарных японских моделей",
        content: "Обзор нескольких легендарных японских моделей автомобилей",
        googleDriveLink: "https://docs.google.com/document/d/1WeDu_5GIffugYKGrnSfDGCzPoSnNL1CRw2PamHnFf14/edit?usp=drive_link"
    },
    {
        title: "Описание сайта",
        content: "На этом сайте предоставляются уникальные возможности для эффективной работы и обслуживания клиентов, а также для получения полной информации о коллекции легендарных японских автомобилей.",
        googleDriveLink: "https://docs.google.com/document/d/1dRkk5b61icuAILNjJkJ8j9XDMwbyc6dowIaw-U2sLtY/edit?usp=drive_link"
    },
    {
        title: "Правила и Политика Сайта \"JDM Legend\"",
        content: "Здесь вы можете найти правила и политику сайта.",
        googleDriveLink: "https://docs.google.com/document/d/1Grtd7lVy6ZaEL7jmb9C0P5VKKlq-evqZOAWY4At73rA/edit?usp=drive_link"
    },
    {
        title: "Технические руководства и регулярное обслуживание",
        content: "Вы модете улучшить свой опыт.",
        googleDriveLink: "https://docs.google.com/document/d/1jQDUWvBIC1Af17_wsc8OhkWP1aXDKrrVfUseiFbgc0I/edit?usp=drive_link"
    },
    {
        title: "Mazda",
        content: "История Mazda",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Mazda"
    },
    {
        title: "Toyota",
        content: "История Toyota",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Toyota"
    },
    {
        title: "Nissan",
        content: "История Nissan",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Nissan"
    },
    {
        title: "Mitsubishi",
        content: "История",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Mitsubishi"
    },
    {
        title: "Honda",
        content: "История Honda",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Honda"
    },
    {
        title: "Subaru",
        content: "История Subaru",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Subaru"
    },
    {
        title: "Suzuki",
        content: "История Suzuki",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Suzuki"
    },
    {
        title: "Toyota Supra",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Toyota_Supra"
    },
    {
        title: " Сравните цены на сайте.Toyota Supra IV (A80) с пробегом",
        content: "Машины продающиеся на дроме. Можно сравнить с нашими.",
        googleDriveLink: "https://auto.ru/cars/toyota/supra/8304263/used/"
    },
    {
        title: "5 причин покупать и не покупать Toyota Supra lV A80",
        content: "Toyota Supra, особенно четвёртого поколения, – автомобиль очень странный. " +
            "Ездить за хлебушком боком? Радоваться огромному ресурсу почти спортивного автомобиля? " +
            "Искать машину в стоковом состоянии «под проект»? Покупать трёхдверную и тесную машину для семьи," +
            " потому что это всё-таки Toyota? Это какое-то противоречие на колёсах, а не автомобиль. ",
        googleDriveLink: "https://www.kolesa.ru/article/5-prichin-pokupat-i-ne-pokupat-toyota-supra-lv-a80"
    },
    {
        title: "Официальный сайт Toyota Supra",
        content: "Самое главное о Новых Toyota Supra (A90)",
        googleDriveLink: "https://www.toyota.de/neuwagen/supra"
    },
    {
        title: "Toyota Celica GT-Four",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Toyota_Celica_GT-Four"
    },
    {
        title: "Характеристики Toyota Celica GT-Four",
        content: "TOYOTA CELICA GT-Four (Coupe-Sports-Special) - технические характеристики",
        googleDriveLink: "https://kimuracars.com/autocatalog/toyota/celica/10826/"
    },
    {
        title: "Сравните цены на сайте. Toyota Celica GT-Four",
        content: "Машины продающиеся на дроме. Можно сравнить с нашими.",
        googleDriveLink: "https://auto.ru/cars/toyota/celica-gt_four/used/"
    },
    {
        title: "Видео-обзор на Toyota Celica GT-Four",
        content: "",
        googleDriveLink: "https://www.youtube.com/watch?v=CShjiy6jsqM&ab_channel=%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9%D0%93%D1%80%D0%B0%D0%BD%D0%B8%D0%BD"
    },
    {
        title: "Видео-обзор на Mazda RX-7 FD",
        content: "Дарит эмоции в обмен на масло с бензином",
        googleDriveLink: "https://www.youtube.com/watch?v=zsOcTaah4rE&ab_channel=%D0%A7%D0%B8%D0%BD%D0%BF%D0%BE%D0%BA%D0%BE%D0%9C%D0%BE%D1%82%D0%BE%D1%80%D0%A1%D0%BF%D0%BE%D1%80%D1%82"
    },
    {
        title: "Видео-обзор на Mazda MX-5 Miata NA",
        content: "MAZDA MX-5 MIATA - САМЫЙ МИЛЫЙ АВТОМОБИЛЬ! Обзор",
        googleDriveLink: "https://www.youtube.com/watch?v=9J0jLDin49Y&ab_channel=BoCarOne"
    },
    {
        title: "Видео-обзор на Mitsubishi Lancer Evolution VII",
        content: "Mitsubishi Lancer Evolution VII - Эволюция не стоит на месте",
        googleDriveLink: "https://www.youtube.com/watch?v=SbBj9h9-zjI&ab_channel=%D0%A7%D0%B8%D0%BD%D0%BF%D0%BE%D0%BA%D0%BE%D0%9C%D0%BE%D1%82%D0%BE%D1%80%D0%A1%D0%BF%D0%BE%D1%80%D1%82"
    },
    {
        title: "Видео-обзор на Honda Prelude 4",
        content: "Обзор Honda Prelude 4 Generation / Auto Emotion",
        googleDriveLink: "https://www.youtube.com/watch?v=ciJqLRXo0jc&ab_channel=AutoEmotion"
    },
    {
        title: "Видео-обзор на Honda Civic EK9 TypeR",
        content: "[ОБЗОР] Honda Civic EK9 TypeR - B16B - Обзор и тестдрайв",
        googleDriveLink: "https://www.youtube.com/watch?v=5jkyuAjI5d8&ab_channel=%D0%92%D0%A0%D1%83%D0%BB%D0%B5"
    },
    {
        title: "Видео-обзор на Nissan Skyline GT-R R34",
        content: "Унижающий современные спорткары старый Nissan Skyline GT-R V-SPEC",
        googleDriveLink: "https://www.youtube.com/watch?v=Q6gn_g-Dlhs&ab_channel=SiberianBeard"
    },
    {
        title: "Видео-обзор на Toyota Mark II",
        content: "JDM-ЛЕГЕНДА MARK 2 TOURER V",
        googleDriveLink: "https://www.youtube.com/watch?v=i9koDoB_MNg&ab_channel=%D0%9C%D0%B8%D1%85%D0%B5%D0%B5%D0%B2%D0%B8%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2"
    },
    {
        title: "Видео-обзор на SUBARU IMPREZA WRX STI",
        content: "Обзор SUBARU IMPREZA WRX STI - Возвращение ",
        googleDriveLink: "https://www.youtube.com/watch?v=Js2-v4DRfRE&ab_channel=FRESHAUTOSHOW"
    },
    {
        title: "Видео-обзор на Subaru Legacy GT",
        content: "ПО ЦЕНЕ ВЕСТЫ - Subaru Legacy GT S (BM) - Спорт-Бизнес седан",
        googleDriveLink: "https://www.youtube.com/watch?v=xH6THyUCTyw&ab_channel=%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3REAL"
    },
    {
        title: "Видео-обзор на Nissan 240SX / Silvia S14",
        content: "240SX / SILVIA S13 - СТОК или СПОРТ?",
        googleDriveLink: "https://www.youtube.com/watch?v=LZAa2vFVRY8&ab_channel=AbsurdDrive"
    },
    {
        title: "Видео-обзор на Nissan 180SX / Silvia S13",
        content: "NISSAN SILVIA S13 - ЯПОНСКАЯ БАЗА. JDM обзор",
        googleDriveLink: "https://www.youtube.com/watch?v=6xZj_78YmTs&ab_channel=BoCarOne"
    },
    {
        title: "Видео-обзор на Nissan 240SX / Silvia S15",
        content: "NISSAN SILVIA S15 - КОРОЛЕВА ДРИФТА!",
        googleDriveLink: "https://www.youtube.com/watch?v=Gx7cnt4w4qk&ab_channel=BoCarOne"
    },
    {
        title: "Видео-обзор на Mitsubishi 3000GT",
        content: "Mitsubishi GTO/3000GT. НЕДОСТИЖИМЫЕ ЯПОНЦЫ ЗОЛОТОГО ДЕСЯТИЛЕТИЯ 20 ВЕКА.",
        googleDriveLink: "https://www.youtube.com/watch?v=0qA5uToTieE&ab_channel=AlexBlare%D0%9A%D1%83%D0%BB%D1%8C%D1%82%D0%BE%D0%B2%D1%8B%D0%B5%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8."
    },
    {
        title: "Сравните цены на сайте. Модели Mazda RX-7 III (FD)",
        content: "",
        googleDriveLink: "https://auto.ru/catalog/cars/mazda/rx_7/4927874/"
    },
    {
        title: "Mazda RX-7",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Mazda_RX-7"
    },
    {
        title: "Mazda MX-5 / Miata",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Mazda_MX-5"
    },
    {
        title: "Mitsubishi Lancer Evolution",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Mitsubishi_Lancer_Evolution"
    },
    {
        title: "Honda Prelude",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Honda_Prelude"
    },
    {
        title: "Honda Civic Type R",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Honda_Civic_Type_R"
    },
    {
        title: "Nissan Skyline",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Nissan_Skyline#GT-R_5"
    },
    {
        title: "Toyota Mark II",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Toyota_Mark_II"
    },
    {
        title: "Subaru Impreza WRX",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Subaru_WRX"
    },
    {
        title: "Subaru Legacy GT",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Subaru_Legacy"
    },
    {
        title: "Nissan Silvia ",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Nissan_Silvia"
    },
    {
        title: "Mitsubishi 3000GT",
        content: "Информация, история и характеристики машины",
        googleDriveLink: "https://ru.wikipedia.org/wiki/Mitsubishi_3000GT"
    },
    {
        title: "",
        content: "",
        googleDriveLink: ""
    },
    // другие статьи по мере необходимости
];

function openLink(url) {
    window.open(url, "_blank");
}

// Функция поиска в базе знаний
function searchKnowledgeBase() {
    // Получить значение запроса из элемента с id 'search_query_knowledge'
    const query = document.getElementById('search_query_knowledge').value.toLowerCase().trim();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    if (query !== '') {
        // Фильтрация статей по запросу
        const matchingArticles = knowledgeBase.filter(function(article) {
            const articleTitle = article.title.toLowerCase();
            const articleContent = article.content.toLowerCase();
            return articleTitle.includes(query) || articleContent.includes(query);
        });

        if (matchingArticles.length > 0) {
            for (let i = 0; i < matchingArticles.length; i++) {
                const article = matchingArticles[i];
                const articleElement = document.createElement('div');
                const titleElement = document.createElement('h3');
                const contentElement = document.createElement('p');

                const titleLinkElement = document.createElement('a');
                titleLinkElement.textContent = article.title;
                titleLinkElement.href = article.googleDriveLink;

                contentElement.textContent = article.content;

                titleLinkElement.addEventListener('click', function(event) {
                    event.preventDefault();
                    openLink(article.googleDriveLink);
                });

                titleElement.appendChild(titleLinkElement);

                articleElement.appendChild(titleElement);
                articleElement.appendChild(contentElement);

                searchResults.appendChild(articleElement);
            }
        } else {
            searchResults.innerHTML = '<p>Нет результатов для запроса: ' + query + '</p>';
        }
    } else {
        alert('Введите ключевое слово или словосочетание для поиска');
    }

    searchResults.style.display = 'block';
}

// Обработчик события "Enter" для поиска
document.getElementById('search_query_knowledge').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchKnowledgeBase();
    }
});