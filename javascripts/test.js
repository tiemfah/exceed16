var url = 'https://exceed.superposition.pknn.dev/data/1402';
var incomingStat = {}
var keys = []
var values = []
var zipped = []

// GET
setInterval(() => {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            incomingStat = myJson;
            console.log(incomingStat)
            var keys = ["Date"].concat(Object.keys(myJson))
            var values = ["Accuracy%"].concat(Object.values(myJson))
            var zipped = keys.map(function(e, i) {
                return [e, values[i]];
              });
            console.log(zipped);
        });
},3000)

