function saveFormValues() {
    const formValues = {};
    Array.from(form.elements).forEach(element => {
        if (element.name) {
            formValues[element.name] = element.value;
        }
    });
    localStorage.setItem('formValues', JSON.stringify(formValues));
}

function sendFormToServer(event) {
    event.preventDefault();
    const messageDiv = document.getElementById('resultForUser');
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
        data: formData,
    })
        .then(function (response) {
            console.log('Success', response)
            messageDiv.textContent = 'Форма успешно отправлена!';
            saveFormValues();
        })
        .catch(function (e) {
            console.error('Fail', e)
            messageDiv.textContent = 'Ошибка при отправке формы. Пожалуйста, попробуйте снова.';
        })
}

document.addEventListener("DOMContentLoaded", function () {
    let getForm = document.getElementsByClassName("getForm");
    let popup_close = document.getElementsByClassName("popup_close");
    let popup = document.getElementById("popup");

    let sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", sendFormToServer);

    getForm[0].addEventListener("click", function (){
        popup.style.display = "block";
        history.pushState({ page: "Form" }, null, "?Form"); 
    });

    popup_close[0].addEventListener("click", function () {
        popup.style.display = "none";
        history.pushState(null, null, '/8');
      });

    window.addEventListener("popstate", function () {
        popup.style.display = "none";
        history.pushState(null, null, '/8');
      });
});


