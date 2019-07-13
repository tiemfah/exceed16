var url = 'https://exceed.superposition.pknn.dev/data/kenmuaySTAT';
var incomingStat = {}
var keys = []
var values = []
var zipped = []
var green = '#69e781'
var darkGreen = '#00af80'


function makeGraph() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      incomingStat = myJson;
      var keys = ["Date"].concat(Object.keys(myJson))
      var values = ["Accuracy%"].concat(Object.values(myJson))
      var zipped = keys.map(function (e, i) {
        return [e, values[i]];
      });

      // GRAPH
      google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(zipped);

        var options = {
          title: "P'Ken performance",
          hAxis: {
            title: 'date',
            titleTextStyle: {
              color: '#333'
            }
          },
          vAxis: {
            minValue: 0
          },
          gradient: {
            color1: green,
            color2: darkGreen,
            x1: '0%',
            y1: '0%',
            x2: '100%',
            y2: '100%',
            useObjectBoundingBoxUnits: true
          },
          color: [green, darkGreen]
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    });
}
makeGraph()


// GET
setInterval(makeGraph, 1000)


// POST
function sendDate() {
  var d = new Date();
  var n = d.getDate()
  date_local = {
    data: {
      date: n
    }
  }
  fetch('https://exceed.superposition.pknn.dev/data/kenmuayDATE', {
      method: 'POST',
      body: JSON.stringify(date_local),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
    })
    .catch(error => console.error('Error:', error));
}

sendDate();