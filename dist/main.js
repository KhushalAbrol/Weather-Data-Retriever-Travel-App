var Client=function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=3)}([function(t,e){const a=async t=>{const e=await fetch(t);try{const t=await e.json();console.log(t).then(t=>{for(const e=0;e<16;e++)weatherDate==data.data[e].valid_date&&postData("/addWeatherData",{maxtemp:t.data[e].high_temp,mintemp:t.data[e].low_temp,press:t.data[e].pres,snow:t.data[e].snow_depth,cloudes:t.data[e].clouds,wind:t.data[e].wind_spd})})}catch(t){console.log("error",t)}};t.exports={getWeatherBitData:function(t,e,n){a("https://api.weatherbit.io/v2.0/forecast/daily?lat="+t+"&lon="+e+"&key=75c3aa19fc1d4994816b265d6f274b57").then((function(t){console.log("Here is the weather data :"+t)}))}}},function(t,e){t.exports={getCoordinates:async t=>{const e=await fetch(t);try{const t=await e.json();return console.log(t),t}catch(t){console.log("error",t)}}}},function(t,e){pixabayBaseURL="https://pixabay.com/api/?",pixabayAPIKey="17156512-d3b9b7fb79bb45c20f4b5b9e6";t.exports={getImage:async t=>{const e=pixabayBaseURL+"key="+pixabayAPIKey+"&q="+t+"&image_type=photo",a=await fetch(e),n={};try{n=await a.json().then(t=>postData("/addImagerData",{imageURL:t.hits.largeImageURL}))}catch(t){console.log("error:",t)}return n}}},function(t,e,a){"use strict";a.r(e);var n=a(0);a.d(e,"getWeatherBitData",(function(){return n.getWeatherBitData}));var o=a(1);a.d(e,"getCoordinates",(function(){return o.getCoordinates}));var r=a(2);a.d(e,"getImage",(function(){return r.getImage}))}]);