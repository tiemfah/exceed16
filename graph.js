google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Accuracy %'],
          ['21',  20],
          ['22',  60],
          ['23',  72],
          ['24',  81]
        ]);

        var options = {
          title: "P'Ken performance",
          hAxis: {title: 'date',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }