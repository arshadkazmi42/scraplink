const _ = require('lodash');
const removeTrailingSlash = require('remove-trailing-slash');
const removeLeadingSlash = require('remove-leading-slash');


const formatRelativeUrls = (rootUrl, urls) => {
  return _.map(urls, (url) => {
    if (!url.startsWith('http')) {
      url = `${removeTrailingSlash(rootUrl)}/${removeLeadingSlash(url)}`;
    }

    return url;
  });
};


module.exports = {
  formatRelativeUrls
};
