
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let message = document.querySelector("#message");
    let button = document.querySelector("#submit");

    button.addEventListener('click', function () {
        alert('hello : ' + name.value + 'your emeil is : ' + email.value + 'your subject is  : ' + subject.value + 'your meddage is : ' + message.value);
    })


