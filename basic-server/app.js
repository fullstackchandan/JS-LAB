// app.js

function getData() {
    fetch('/api/data') // Assuming you have a route on your Express server at /api/data
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Data from server: ${JSON.stringify(data)}`;
        })
        .catch(error => console.error('Error:', error));
}
