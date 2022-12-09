
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    greetUser()

                }
                form.classList.add('was-validated');

            }, false);
        });
    }, false);

    function greetUser() {
        const userNameInput = document.querySelector("#validationCustomUsername")
        const userNameInputValue = userNameInput.value
        const subscribeNewsLetter = document.querySelector("#subscribeNewsLetter")
        const isSubscribed = subscribeNewsLetter.checked

        let welcomeMessage = `Transaction for credit card:  ${userNameInputValue} has been donne.`
        if (isSubscribed) {
            welcomeMessage = welcomeMessage + " Thank you for using our payment!"
        }
        alert(welcomeMessage)

    }
})();
