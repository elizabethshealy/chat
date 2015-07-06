function atTemp() {
      var city= input.slice(6);

      var renderFunction = function(jsonresult) {
        var temp = jsonresult.main.temp;
        var resulttext = "it's" + ' ' + temp + ' ' + "in" + ' ' + city;
        var result = resulttext;
        $('div.div-result').append(result);

      };

      function tempFunction(citytemp, doneFunction) {
        var url= "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        $.ajax( {url: url} ).done(doneFunction);

      };

      tempFunction(input, renderFunction);
      
} 