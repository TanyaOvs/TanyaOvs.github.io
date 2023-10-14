function onChange(event) {
    event.preventDefault();

    let number = document.getElementById("numberOfProducts").value;
    let select = document.getElementById("Product");
    let price = parseInt(select.value);
    let result = document.getElementById("result");
    console.log(select.value);

    // Создание регулярного выражения для проверки
    const pattern = /^[0-9]+$/;
    const inputValue = number;
    if (pattern.test(inputValue)) {
        console.log("Данные введены корректно.");
        result.innerHTML = "Результат: "+(parseInt(number)*price);
    } else 
    {
        alert("Ошибка: недопустимые символы");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //При выборе другого товара
    let form = document.getElementsByClassName("form");
    form[0].addEventListener("change", onChange);
});