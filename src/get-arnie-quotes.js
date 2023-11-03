const { httpGet } = require('./mock-http-interface');

/**
 * Gets a list of Arnie quotes.
 * 
 * @param {string[]} urls The list of URLs to retrieve
 * @returns {Promise} The response containing an array of quotes
 */
const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map((url) => {
    return httpGet(url).then((response) => {
      return { [`${response.status === 200 ? 'Arnie Quote' : 'FAILURE'}`]: JSON.parse(response.body).message };    
    })
  })
  );
};

module.exports = {
  getArnieQuotes,
};
