//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event;

var answers = [];

function getQuestions(q, a0, a1, a2) {
    do {
        event = +prompt(q + a1 + a2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            answers.push(event);
        }
    } while (!isAnswer(a0, event))
}

function isAnswer(a0, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > a0) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

getQuestions(works.a00, works.a0, works.a1, works.a2);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        getQuestions(works.b00, works.b0, works.b1, works.b2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                getQuestions(works.d00, works.d0, works.d1, works.d2)
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                getQuestions(works.d00, works.d0, works.d1, works.d2)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        getQuestions(works.c00, works.c0, works.c1, works.c2)
        switch (event) {
            case 1: // Второе действие
                getQuestions(works.d00, works.d0, works.d1, works.d2)
                break;
            case 2: // Второе действие
                getQuestions(works.d00, works.d0, works.d1, works.d2)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

getQuestions(works.e00, works.e0, "", " \n");

function selectAnswer(event, ua1, ua2) {
    if (event == 1) {
        return ua1;
    }
    else {
        return ua2;

    }

}

switch (answers[3]) {
    case 1:
        alert(works.a00 + "\n" + selectAnswer(answers[0], works.a1, works.a2));
        break;
    case 2:
        if (answers[0] == 1) {
            alert(works.b00 + "\n" + selectAnswer(answers[1], works.a1, works.a2));
        }
        else {
            alert(works.c00 + "\n" + selectAnswer(answers[1], works.c1, works.c2));
        }
        break;
    case 3:
        alert(works.d00 + "\n" + selectAnswer(answers[2], works.d1, works.d2));
        break;
}

alert('Спасибо за игру');


