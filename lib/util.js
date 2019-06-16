const _ = require('lodash');


const formatRelativeUrls = (rootUrl, urls) => {
  return _.map(urls, (url) => {
    if (!url.startsWith('http')) {
      url = `${removeEndingSlash(rootUrl)}/${removeStartingSlash(url)}`;
    }

    return url;
  });
};


const removeEndingSlash = url => {
  if (url.charAt(url.length -  1) == '/') {
    return url.slice(0, url.length - 1);
  }

  return url;
};


const removeStartingSlash = url => {
  if (url.charAt(0) == '/') {
    return url.slice(1, url.length);
  }

  return url;
};


module.exports = {
  formatRelativeUrls,
  removeEndingSlash,
  removeStartingSlash
};
