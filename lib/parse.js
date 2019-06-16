const assets = (data) => {
  let match;
  const assets = [];
  const rex = /<img[^>]+src="?([^"\s]+)"/g;
  while (match = rex.exec(data)) { // eslint-disable-line no-cond-assign
    if (match[1] !== '#' && match[1] !== '') {
      assets.push(match[1]);
    }
  }

  return assets;
};


const links = (data) => {
  let match;
  const links = [];
  const rex = /<a[^>]+href="?([^"\s]+)"/g;
  while (match = rex.exec(data)) { // eslint-disable-line no-cond-assign
    if (match[1] !== '#' && match[1] !== '') {
      links.push(match[1]);
    }
  }

  return links;
};


module.exports = {
  assets,
  links
};
