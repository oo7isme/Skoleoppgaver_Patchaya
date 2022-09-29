// var form = document.getElementById(form)

function showData() {
    fetch('http://localhost:3000/hei')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('box-table').innerHTML = '';
            var template = document.getElementById('template-header');
            var clone = template.content.cloneNode(true);
            document.getElementById('box-table').appendChild(clone);
            data.forEach(row => {
                var template = document.getElementById('template');
                var clone = template.content.cloneNode(true);
                clone.getElementById('elevid').textContent = row.ElevID;
                clone.getElementById('fornavn').textContent = row.Fornavn;
                clone.getElementById('etternavn').textContent = row.Etternavn;
                clone.getElementById('klasse').textContent = row.Klasse;
                clone.getElementById('hobby').textContent = row.Hobby;
                clone.getElementById('kjonn').textContent = row.kjonn;
                clone.getElementById('datamaskin').textContent = row.Datamaskin;
                document.getElementById('box-table').appendChild(clone);
            })
        })
}
// getRequest()