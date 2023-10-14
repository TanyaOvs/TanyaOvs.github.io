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
    } else 
    {
        alert("Ошибка: количество товаров не указано или введены недопустимые символы");
    }
    
    //Изменение html файла при изменении товара
    let selectForSecond = document.getElementById("selectForSecond");
    let checkboxForThird = document.getElementById("checkboxForThird");
    if(price == 400) {
        selectForSecond.style.display ="none";
        checkboxForThird.style.display ="none";
        result.innerHTML = "Цена: "+(number*price);
    }
    if(price == 600) {
        selectForSecond.style.display ="block";
        checkboxForThird.style.display ="none";
        //Подсчет стоимости
        let selectedOption = document.getElementsByName("selectedOption");
        selectedOption = parseInt(selectedOption[0].value);
        result.innerHTML = "Цена: "+(number*(price + selectedOption));
    }
    if(price == 800) {
        selectForSecond.style.display ="none";
        checkboxForThird.style.display ="block";
        //ДОДЕЛАТЬ НА ПАРЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕе
    }

}

 //Функция для поиска выбранной радиокнопки
function getSelectedProduct(){
    let selectedProduct;
    let Products = document.getElementsByName("product");
    for(let i = 0; i < Products.length; i++) {
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
