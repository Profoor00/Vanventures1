document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactMessage = `Köszönjük, ${name}! Üzeneted: "${message}" elküldve a következő e-mail címre: ${email}`;
    document.getElementById('contactMessage').innerText = contactMessage;
});

