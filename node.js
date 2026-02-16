const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Chatu UI</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
    body {
        margin: 0;
        height: 100vh;
        background: linear-gradient(135deg, #4f46e5, #9333ea);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Segoe UI", sans-serif;
        color: white;
    }

    .card {
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(12px);
        padding: 40px;
        border-radius: 16px;
        text-align: center;
        width: 350px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    h1 {
        margin-bottom: 20px;
        font-size: 28px;
    }

    #name {
        font-size: 32px;
        font-weight: bold;
        margin-top: 20px;
        min-height: 40px;
    }

    button {
        margin-top: 25px;
        padding: 12px 24px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background: #22c55e;
        color: black;
        font-weight: bold;
        transition: transform 0.2s, background 0.2s;
    }

    button:hover {
        transform: scale(1.05);
        background: #16a34a;
    }
</style>
</head>

<body>
<div class="card">
    <h1>Welcome to Chatu ���</h1>
    <div id="name"></div>
    <button onclick="animateName()">Show My Name</button>
</div>

<script>
    const name = "Chaitanya";
    const nameDiv = document.getElementById("name");

    function animateName() {
        nameDiv.innerHTML = "";
        let i = 0;

        const interval = setInterval(() => {
            nameDiv.innerHTML += name[i];
            i++;
            if (i === name.length) {
                clearInterval(interval);
                blink();
            }
        }, 200);
    }

    function blink() {
        let visible = true;
        let count = 0;

        const blinkInterval = setInterval(() => {
            nameDiv.style.visibility = visible ? "hidden" : "visible";
            visible = !visible;
            count++;

            if (count === 6) {
                clearInterval(blinkInterval);
                nameDiv.style.visibility = "visible";
            }
        }, 300);
    }
</script>

</body>
</html>
`);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`��� server running on port ${PORT}`);
});

