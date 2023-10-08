document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
    function onClick(){
        let number = document.getElementById("numberOfProducts").value;
        let select = document.getElementById("Product");
        let price = getPriceOfProduct(select.value);
        let relult = document.getElementById("result");
        // Создание регулярного выражения для проверки
        const pattern = /^[0-9]+$/;
        const inputValue = number;
        if (pattern.test(inputValue)){
            console.log("Данные введены корректно.");
            result.innerHTML = "Результат: "+(parseInt(number)*price);
        } else {alert("Ошибка: недопустимые символы");}
        return false;
    }
    //Цена товара
    function getPriceOfProduct(value){
    if(value === "NaborNakleek") {return 150;}
    if(value === "PlushToy") {return 400;}
    if(value === "Pajamas") {return 600;}
    if(value === "Plaid") {return 800;}
    }
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", onClick);
});
