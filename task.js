// Практическая работа с урока
let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

let firstName = "Иван";
let lastName = "Иванов";
let fullName = firstName + " " + lastName;

console.log("Сумма:", sum);
console.log("Разность:", difference);
console.log("Произведение:", product);
console.log("Деление:", quotient);
console.log("Полное имя:", fullName);

// --- Урок: Условия ---

let title = "Купить продукты";
if (title === "") {
    console.log("Название задачи не указано");
} else {
    console.log("Задача: " + title);
}

let tasks = 6;
if (tasks === 0) {
    console.log("Список пуст");
} else if (tasks >= 1 && tasks <= 3) {
    console.log("Немного задач");
} else {
    console.log("Много задач");
}

let isCompleted = false;
if (isCompleted) {
    console.log("Задача выполнена");
} else {
    console.log("Задача ещё в работе");
}

let urgent = true;
if (tasks > 0 && urgent) {
    console.log("Есть срочные задачи");
} else if (tasks > 0 && !urgent) {
    console.log("Задачи есть, но они не срочные");
} else if (tasks === 0) {
    console.log("Все задачи завершены");
}

let isAdmin = false;
let isModerator = true;
if (isAdmin || isModerator) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}




// --- Самостоятельная работа: Скидка ---
let amount = 4500;

if (amount === 0) {
    console.log("Корзина пуста");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount < 5000) {
    console.log("Скидка 5%");
} else if (amount >= 5000) {
    console.log("Скидка 10%");
}
