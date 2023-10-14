function onChange(event) {
    event.preventDefault();

    //Количество товаров
    let number = document.getElementById("numberOfProducts").value;
    number = parseInt(number);
    //Выбранная радиокнопка (value)
    let selectedProduct = getSelectedProduct();
    //Поле для вывода цены
    let result = document.getElementById("result");

    //Первоначальная цена товара
    let price = parseInt(selectedProduct);
    // Создание регулярного выражения для проверки цены
    const pattern = /^[0-9]+$/;
    const inputValue = number;
    let priceIsCorrect = false;
    if (pattern.test(inputValue)) {
        console.log("Данные введены корректно.");
        priceIsCorrect = true;
    } else {
        alert("Количество товаров не указано или введены недопустимые символы");
    }
    //Изменение html файла при изменении товара
    let selectForSecond = document.getElementById("selectForSecond");
    let checkboxForThird = document.getElementById("checkbox");
    if(price === 400 && priceIsCorrect) {
        selectForSecond.style.display ="none";
        checkboxForThird.style.display ="none";
        result.innerHTML = "Цена: "+(number*price);
    }
    if(price === 600 && priceIsCorrect) {
        selectForSecond.style.display ="block";
        checkboxForThird.style.display ="none";
        //Подсчет стоимости
        let selectedOption = document.getElementsByName("selectedOption");
        selectedOption = parseInt(selectedOption[0].value);
        result.innerHTML = "Цена: "+(number*(price + selectedOption));
    }
    if(price === 800 && priceIsCorrect) {
        selectForSecond.style.display ="none";
        checkboxForThird.style.display ="block";
        //ДОДЕЛАТЬ НА ПАРЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕе
        result.innerHTML = "Цена: "+(number*price);
    }

}

 //Функция для поиска выбранной радиокнопки
function getSelectedProduct(){
    let selectedProduct;
    let Products = document.getElementsByName("product");
    let i;
    for(i = 0; i < Products.length; i+=1) {
        if(Products[i].checked){
            selectedProduct = Products[i].value;
            break;
        }
    }
    return selectedProduct;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //При выборе другого товара
    let form = document.getElementsByClassName("form");
    form[0].addEventListener("change", onChange);
});
