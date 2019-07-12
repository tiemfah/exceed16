var url = 'https://exceed.superposition.pknn.dev/data/200';


// GET


setInterval(() => {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });
},3000)