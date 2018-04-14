function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    if (num1 == "") {

        document.getElementById('out').innerHTML = "Число номер 1 пустое։(";
        return;
    }
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    if (num2 == "") {
        document.getElementById('out').innerHTML = "Число номер 2 пустое։(";
        return;
    };
    num2 = parseInt(num2);

    result = (num1 + num2);
    document.getElementById('out').innerHTML = "Ответ։ " + result;
}



function minus() {
    num1 = document.getElementById('n1').value;
    if (num1 == "") {

        document.getElementById('out').innerHTML = "Число номер 1 пустое։(";
        return;
    }
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    if (num2 == "") {
        document.getElementById('out').innerHTML = "Число номер 2 пустое։(";
        return;
    };
    num2 = parseInt(num2);
    result = (num1 - num2);
    document.getElementById('out').innerHTML = "Ответ։ " + result;
}

function myltiply() {
    num1 = document.getElementById('n1').value;
    if (num1 == "") {
        document.getElementById('out').innerHTML = "Число номер 1 пустое։(";
        return;
    }
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    if (num2 == "") {
        document.getElementById('out').innerHTML = "Число номер 2 пустое։(";
        return;
    }
    num2 = parseInt(num2);
    result = (num1 * num2);
    document.getElementById('out').innerHTML = "Ответ։ " + result;
}

function divine() {

    num1 = document.getElementById('n1').value;
    if (num1 == "") {

        document.getElementById('out').innerHTML = "Число номер 1 пустое։(";
        return;
    }
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    if (num2 == "") {
        document.getElementById('out').innerHTML = "Число номер 2 пустое։(";
        return;
    };
    num2 = parseInt(num2);

    result = (num1 / num2).toFixed(2);
    document.getElementById('out').innerHTML = "Ответ։ " + result;
}