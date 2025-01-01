<!-- JavaScript -->
    <script>
        // Toggles the chat popup visibility
        function toggleChatPopup() {
            const chatForm = document.getElementById("chatForm");
            chatForm.style.display = chatForm.style.display === "block" ? "none" : "block";
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Form validation function
        function validateForm() {
            const contactNumber = document.getElementById("contactNumber").value;
            const email = document.getElementById("email").value;

            // Validate contact number
            if (!/^\d{10}$/.test(contactNumber)) {
                alert("Please enter a valid 10-digit contact number.");
                return false;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }
    </script>