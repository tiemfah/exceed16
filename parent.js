var url = 'https://exceed.superposition.pknn.dev/data/140';


// GET
fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            $("#reviewP").append(`<br> ${myJson.content}`)
        });