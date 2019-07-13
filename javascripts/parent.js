// GET
fetch('https://exceed.superposition.pknn.dev/data/kenmuayRV')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            $("#reviewP").append(`<br> ${myJson.content}`)
        });