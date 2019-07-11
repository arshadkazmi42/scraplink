const SearchAnchorTags = require('search-a-tags');
const SearchImgTags = require('search-img-tags');


const assets = (data) => {
  return SearchImgTags(data);
};


const links = (data) => {
  return SearchAnchorTags(data);
};


module.exports = {
  assets,
  links
};
