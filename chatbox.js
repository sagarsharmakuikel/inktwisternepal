function toggleChatPopup() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'flex' ? 'none' : 'flex';
}
function toggleChatPopup() {
    const chatPopup = document.getElementById('chatPopup');
    if (chatPopup.style.display === 'none' || chatPopup.style.display === '') {
        chatPopup.style.display = 'block';
    } else {
        chatPopup.style.display = 'none';
    }
}

    function toggleChatPopup() {
        var popup = document.getElementById('chatPopup');
        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.display = 'block';  // Show the popup
        } else {
            popup.style.display = 'none';   // Hide the popup
        }
    }
    
   
      function updateTime() {
            const options = { timeZone: 'Asia/Kathmandu', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const time = new Date().toLocaleTimeString('en-US', options);
            document.getElementById('nepal-time').textContent = time;
        }

        setInterval(updateTime, 1000); // Update the time every second
        updateTime(); // Initial time update