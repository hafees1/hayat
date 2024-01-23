<!-- feedback.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Feedback Form</title>
</head>
<body style="background-color: #f0f0f0; font-family: 'Arial', sans-serif;">

    <!-- Feedback Form Content -->
    <div class="main-content">
        <h1>Feedback Form</h1>
        <form id="feedbackForm">
            <label for="feedback">Your Feedback:</label>
            <textarea id="feedback" required></textarea>
            <br>
            <button type="button" id="submitFeedbackButton" onclick="submitFeedback()">Submit Feedback</button>
        </form>
    </div>

    <!-- Include the JavaScript directly -->
    <script>
        function submitFeedback() {
            console.log("Button Clicked");
            const feedback = document.getElementById('feedback').value;

            // Validate feedback
            if (!feedback) {
                alert('Please provide your feedback.');
                return;
            }

            // Here, you can send the feedback to your server or perform any other desired action
            alert('Feedback submitted successfully!');
            
            // Optionally, clear the textarea after submission
            document.getElementById('feedback').value = '';
        }
    </script>

</body>
</html>


