const contactForm = document.querySelector('.form__content');
let name = document.getElementById('name');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let FormData = {
        name: name.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/sendEmail'); // Ensure this matches the route in server.js
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            window.location.href = '/thanks.html';
        } else {
            alert("Something went wrong. Please try again.");
        }
    };
    xhr.send(JSON.stringify(FormData));
});
