// var form = document.getElementById(form)

function getRequest() {
    fetch('http://localhost:3000/hei')
        .then((response) => response.json())
        .then((data) => console.log(data));
}
getRequest()