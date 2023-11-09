document.addEventListener("DOMContentLoaded", function () {

    let getForm = document.getElementsByClassName("getForm");
    getForm[0].addEventListener("click", function (){
        let popup = document.getElementById("popup");
        popup.style.display = "block";
    });
});