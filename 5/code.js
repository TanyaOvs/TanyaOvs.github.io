function onClick(event){
    //event.preventDefault();
    let number = document.getElementById("numberOfProducts").value;
    let select = document.getElementById("Product");
    let price = getPriceOfProduct(select.value);
    let relult = document.getElementById("result");
    result.innerHTML = "Результат: "+(parseInt(number)*price);
    return false;
}

/*function checkNumber(num){
    Проверка числа на отсутствие ненужных символов

}*/

function getPriceOfProduct(value){
    if(value === "NaborNakleek") {return 150;}
    if(value === "PlushToy") {return 400;}
    if(value === "Pajamas") {return 600;}
    if(value === "Plaid") {return 800;}
}


//DOM
window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("calculateButton");
    b.addEventListener("click", onClick);
});