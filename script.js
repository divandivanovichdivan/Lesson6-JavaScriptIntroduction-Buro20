let lang = prompt("Выберите язык: en/ru");
if (lang == "ru") {
    let DaysRu = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    let day = prompt("Выберите день недели: ");
    if (day == DaysRu[0]) {
        alert("Понедельник");
    } else if (day == DaysRu[1]) {
        alert("Вторник");
    } else if (day == DaysRu[2]) {
        alert("Среда");
    } else if (day == DaysRu[3]) {
        alert("Четверг");
    } else if (day == DaysRu[4]) {
        alert("Пятница");
    } else if (day == DaysRu[5]) {
        alert("Суббота");
    } else if (day == DaysRu[6]) {
        alert("Воскресенье");
    } else {
        alert("Это не день недели!");
    }
    let time = prompt("Сколько у тебя времени (В часах)?");
    if (0 <= time && time < 6) {
        alert("Доброй ночи");
    } else if (6 <= time && time < 12) {
        alert("Доброе утро");
    } else if (12 <= time && time < 18) {
        alert("Добрый день")
    } else if (18 <= time && time < 24) {
        alert("Добрый вечер")
    } else {
        alert("Проверьте правильно ли вы указали время (число от 0 до 23)")
    }
} else if (lang == "en") {
    let DaysEn = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
    let day = prompt("Choose yor day of the week: ");
    if (day == DaysEn[0]) {
        alert("Monday");
    } else if (day == DaysEn[1]) {
        alert("Tuesday");
    } else if (day == DaysEn[2]) {
        alert("Wednesday");
    } else if (day == DaysEn[3]) {
        alert("Thursday");
    } else if (day == DaysEn[4]) {
        alert("Friday");
    } else if (day == DaysEn[5]) {
        alert("Saturday");
    } else if (day == DaysEn[6]) {
        alert("Sunday");
    } else {
        alert("This isn't a day of the week! ");
    }
    let time = prompt("What's your time (in hours)?");
    if (0 <= time && time < 6) {
        alert("Good night");
    } else if (6 <= time && time < 12) {
        alert("Good morning");
    } else if (12 <= time && time < 18) {
        alert("Good afternoon")
    } else if (18 <= time && time < 24) {
        alert("Good evening")
    } else {
        alert("Check if you have entered the time correctly (a number between 0 and 23)")
    }
} else {
    alert("Я же сказал en/ru! I told you en/ru!");
}