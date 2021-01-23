const { fetchData } = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  .then((data) => {
      console.log(data.name);
      const origins = data.origin.url;
      return fetchData(origins)
  .then((data) => console.log(data.dimension));
    });
  })
  .catch((err) => console.log(err));
