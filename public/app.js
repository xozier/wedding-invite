const contactForm = document.querySelector('.form__content');
let name = document.getElementById('name');
let message = document.getElementById('message');
let participation = document.querySelector('input[name="participation"]:checked'); // Get the selected radio button

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if a radio button is selected
    if (!participation) {
        alert("Please select whether you will attend the event.");
        return;
    }

    let FormData = {
        name: name.value,
        message: message.value,
        participation: participation.value // Add the selected radio button value
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
