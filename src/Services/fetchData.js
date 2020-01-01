import { PRIMARY_SERVER } from "../Constants/ServerUrls";

/* 
  function used to fetch the resources from the server
*/
const fetchData = route => {
  // framing the request url
  const requestUrl = PRIMARY_SERVER + route;

  return new Promise((resolve, reject) => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        resolve(data); // resovlve the promise
      })
      .catch(error => {
        reject(error); // reject the promise
      });
  });
};

export default fetchData;
