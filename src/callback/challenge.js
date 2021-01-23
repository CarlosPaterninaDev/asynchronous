let XMLhttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';



function fetchData(url, callback) {
  let xhttp = new XMLhttpRequest();
  // Metodo, Url de la API, Activamos el asincronismo por defecto es true
  xhttp.open("GET", url, true);
  // Escuchamos lo que va a realizar esa conexión
  xhttp.onreadystatechange = function (event) {
    // Si el status es satisfactorio ejeccutamos X cosa
    if (xhttp.readyState === 4) {
      // Completado
      if (xhttp.status === 200) {
        // el status en que se encuentra 200, 300, 400, 500, en este punto averiaguremos que clase de repuesta dio
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error: ${url}`);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}


fetchData(API, function (err1, data1) {

  if(err1) return console.error(err1);
  fetchData( API + data1.results[0].id, function (err2, data2) {
    if(err2) return console.error(err2);
      fetchData( data2.origin.url, function (err3, data3) {
        if(err3) return console.error(err3);
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        
      } )
    
  } )

  
})