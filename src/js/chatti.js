'use strict';

// var router = require('../router');
// var settings = require('../settings');
// var EtsyService = require('../services/etsy-service');
var temp = require('../tempAPI');

$(function () {
  'use strict';
  $('form').submit(function(e) {
    e.preventDefault();

    var input = $('input[type="text"]').val();
    $('input[type="text"]').val("");

    var command = input.split(' ')[0];

    if (command === "@temp") {
      
        atTemp();

// //temperature stuff

//       var city= input.slice(6);

//       var renderFunction = function(jsonresult) {
//         var temp = jsonresult.main.temp;
//         var resulttext = "it's" + ' ' + temp + ' ' + "in" + ' ' + city;
//         var result = resulttext;
//         $('div.div-result').append(result);

//       };

//       function tempFunction(citytemp, doneFunction) {
//         var url= "http://api.openweathermap.org/data/2.5/weather?q=" + city;
//         $.ajax( {url: url} ).done(doneFunction);

//       };

//       tempFunction(input, renderFunction);
      
    } else if (command === "@gh") {
      
      var user= input.slice(4);
      
      function requestJSON (url, callback) {
          $.ajax({
              url: "https://api.github.com/users/"+ "{" + user + "}" ,
              complete: function(xhr) {
              callback.call(null, xhr.responseJSON);
              }
          });
       }
      


    } else {
      
    }

  });

});


//https://glosbe.com/gapi/translate?from=en&dest=es&phrase=phrase&format=json
