var url = 'https://exceed.superposition.pknn.dev/data/kenmuaySTAT';
var stat = {
    data: {
        "1": 20,
        "2": 30,
        "3": 50,
        "4": 40
    }
};

// POST
fetch(url, {
    method: 'POST',
    body: JSON.stringify(stat),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(response => {console.log('Success:', JSON.stringify(response));})
.catch(error => console.error('Error:', error));