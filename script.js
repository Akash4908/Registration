$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();
        
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();
        
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Submission Details</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background: linear-gradient(135deg, #2575fc, #6a11cb);
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    .info-box {
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 10px;
                        padding: 20px;
                        margin: 20px auto;
                        max-width: 400px;
                        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 1.2em;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <h1>Submission Details</h1>
                <div class="info-box">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
            </body>
            </html>
        `);
    });
});
