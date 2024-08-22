// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const baseUrl = 'https://localhost:8080/';
    
    let queryString = '?';

    if (name) {
        queryString += `name=${encodeURIComponent(name)}`;
    }

    if (year) {
        if (queryString.length > 1) queryString += '&';
        queryString += `year=${encodeURIComponent(year)}`;
    }

    document.getElementById('url').textContent = baseUrl + queryString;
});
