function saveFormValues() {
    let form = document.getElementById("form");
    let formValues = {};
    Array.from(form.elements).forEach((element) => {
        if (element.name) {
            formValues[element.name] = element.value;
        }
    });
    localStorage.setItem("formValues", JSON.stringify(formValues));
}

function sendFormToServer(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById("FIO").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        organization: document.getElementById("organis").value,
        message: document.getElementById("message").value,
        agree: document.getElementById("checkboxForm").checked,
    };
    var slapform = new Slapform();
    slapform.submit({
        form: 'UeL2Iaq5l',
        data: formData
    })
        .then(function (response) {
            console.log('Success', response)
            /*saveFormValues();*/
            alert("Форма успешно отправлена!");
        })
        .catch(function (e) {
            console.error('Fail', e)
           alert("Ошибка при отправке формы. Пожалуйста, попробуйте снова.");
        })

        saveFormValues();
        setTimeout(function () {
            let form = document.getElementById("form");
            form.reset();
            localStorage.removeItem("formData");
        }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    let getForm = document.getElementsByClassName("getForm");
    let popup_close = document.getElementsByClassName("popup_close");
    let popup = document.getElementById("popup");

    let sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", sendFormToServer);

    getForm[0].addEventListener("click", function (){
        popup.style.display = "block";
        history.pushState(null, "Форма", "?form");
    });

    popup_close[0].addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "none";
        history.back();
      });

    window.addEventListener("popstate", function () {
        popup.style.display = "none";
        history.back();
      });
});


