let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;

console.log(sum);
console.log(difference);

// Урок: операторы и условия //

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


