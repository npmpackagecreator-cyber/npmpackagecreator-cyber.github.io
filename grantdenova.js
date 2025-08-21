// Инициализируем объект WebApp
let tg = window.Telegram.WebApp;

// Основная кнопка внизу экрана
let mainButton = tg.MainButton;

// Включаем полноэкранный режим для лучшего UX
tg.expand();

// Получаем данные пользователя из Telegram
let user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById('user-name').textContent = user.first_name;
}

// Настраиваем и вешаем обработчик на свою кнопку
document.getElementById('main-button').addEventListener('click', function() {
    // Меняем текст основной кнопки Telegram
    mainButton.setText("Данные отправлены!");
    // Показываем основную кнопку
    mainButton.show();
    // Отправляем данные боту при нажатии на основную кнопку
    mainButton.onClick(function() {
        // Данные, которые мы хотим отправить
        let data = {
            user_id: user.id,
            action: 'button_clicked'
        };
        // Отправляем данные боту (они придут в служ. сообщение)
        tg.sendData(JSON.stringify(data));
        // Закрываем WebApp
        tg.close();
    });
});

// Обработчик события нажатия на кнопку "Назад" в Telegram
tg.onEvent('backButtonClicked', function() {
    tg.close(); // Просто закрываем приложение
});
// Показываем кнопку "Назад"
tg.BackButton.show();