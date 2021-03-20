
axios.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then(function (response) {
    //console.log(response.data);
    var baseTemp = response.data.baseTemperature;
    var months = new Array(12);
    for (var monthsi = 0; monthsi < months.length; monthsi++) {
      months[monthsi] = new Array();
    }
    var years = [];

    /*var description = document.getElementById("description");
    description.innerText = response.data.description;*/

    for (var i = 0; i < response.data.monthlyVariance.length; i++) {
      var tempMonth = response.data.monthlyVariance[i];
      //console.log(parseInt(tempMonth["month"]));
      months[parseInt(tempMonth["month"]) - 1].push(
        tempMonth.variance
      );
      if (years[years.length - 1] != tempMonth.year) {
        years.push(tempMonth.year);
      }
    }

    var data = [
      {
        z: months,
        x: years,
        y: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octrober', 'November', 'December'],
        type: 'heatmap'
      }
    ];
    var layout = {
      title: 'Monthly Global Land-Surface Temperature',
      xaxis: {
        title: 'Year',
        titlefont: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
      yaxis: {
        title: 'Month',
        titlefont: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }

    Plotly.newPlot('chart', data, layout);
  })
  .catch(function (error) {
    console.log(error);
  });
