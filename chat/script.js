document.getElementById('chatButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('chatWindow').style.display = 'block';
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'none';
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('chatInput');
    const messages = document.getElementById('messages');
    const messageText = messageInput.value;

    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messages.appendChild(messageElement);
        messageInput.value = '';
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
});
