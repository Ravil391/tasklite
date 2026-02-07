let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;

console.log(sum);
console.log(difference);

// Урок:
//  операторы и условия //

let title = "";
if(title === ""){
    console.log("Название задач не указано");
}else{
    console.log("Задача:", title);
}

let tasks = 5;
if (tasks === 0){
    console.log("Список пуст");
}else if(tasks<=3){
    console.log("Немного задач");
}else{
    console.log("Много задач");
}

function sum(a,b){
    return a+b;
}
console.log(sum(3, 4));
console.log(sum(10, 5));

function isTaskDone(status){
    return status === "Выполнено";
}

console.log(isTaskDone("Выполнено")); //
console.log(isTaskDone("Активно"));

function TaskSummary(total, done){
    let active = total - done;
    return "Всего: " + total + " | Выполнено: " + done + "| Активных: " + active;
}

console.log(taskSummary(5,4));
console.log(10,4);

let cities = ["Москва", "Париж", "Питер", "Токио"];
cities[2] = "Лондон";
console.log(cities);

let task = {
id: 1,
title: "Купить молоко",
status: "активна"
};
console.log(task.id);
console.log(task.title);
console.log(task.status);

let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Купить молоко", status: "активна" },
];

console.log(tasks[0].title);
console.log(tasks[1].status);

tasks[0].status = "выполнена";
console.log(task[0]);

tasks.push({id: 4, title: "Прогулка", status: "активна"});
console.log(tasks);

let user = {
    name: "Анна",
    tasks: tasks
};

console.log(user.name);
console.log(user.tasks.length);
