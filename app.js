/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

/* Mobile-First Design */
.container {
    max-width: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    color: #4CAF50;
    margin-bottom: 20px;
    text-align: center;
}

input[type="text"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style-type: none;
    margin-top: 20px;
}

li {
    background-color: #f9f9f9;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li button {
    width: auto;
    padding: 8px 12px;
    margin-left: 10px;
    font-size: 14px;
}

.nav-buttons {
    margin-top: 20px;
}

.hidden {
    display: none;
}

/* Responsive Design for Larger Screens */
@media (min-width: 600px) {
    .container {
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
    }

    h1 {
        font-size: 28px;
    }

    input[type="text"] {
        width: calc(100% - 120px);
    }

    button {
        width: auto;
        padding: 12px 20px;
    }
}
