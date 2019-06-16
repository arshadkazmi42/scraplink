const fetch = require('node-fetch');

const { Parse, ScrapUtil } = require('./lib');


const scrap = async (url) => {
  return await fetch(url)
    .then( async (response) => {
      const htmlBody = await response.text();
      return parseLinks(url, htmlBody);
    })
    .catch((err) => {
      throw err;
    });
};


const parseLinks = (rootUrl, data) => {

  // Parsing assets url from img tag and formatting relative url to absolute
  const assets = ScrapUtil.formatRelativeUrls(
    rootUrl, Parse.assets(data)
  );

  // Parsing linkts from a href tag and formatting relative url to absolute
  const links = ScrapUtil.formatRelativeUrls(
    rootUrl, Parse.links(data)
  );

  return { assets, links };
};



module.exports = scrap;