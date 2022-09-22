var form = document.getElementById(form)

function getRequest() {
    var inputtext = document.getElementById('fname').value
    console.log(inputtext)

    fetch('http://localhost:3000/')
        .then((response) => response.json())
        .then((data) => console.log(data));
}