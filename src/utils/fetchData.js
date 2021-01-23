let XMLhttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLhttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.re))
          : reject(new Error(`Error: ${url}`));
      }
    };
    xhttp.send();
  });
};

const fetchDataAsync = async (url) => {
  const xhttp = new XMLhttpRequest();
  try {
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          console.log("xhttp", xhttp.responseText);
          JSON.parse(xhttp.responseText);
        } else {
          new Error("Ocurred an error Async");
        }
      }
      
    };
  } catch (error) {
    new Error(`Error: ${url}`);
  }
};

module.exports = {
  fetchData,
  fetchDataAsync,
};
