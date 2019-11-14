# scraplink 

[![Build Status](https://travis-ci.com/arshadkazmi42/scraplink.svg?branch=master)](https://travis-ci.com/arshadkazmi42/scraplink)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/scraplink.svg)](https://github.com/arshadkazmi42/scraplink)
[![LICENSE](https://img.shields.io/npm/l/scraplink.svg)](https://github.com/arshadkazmi42/scraplink/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/scraplink.svg)](https://www.npmjs.com/package/scraplink)
[![NPM Version](https://img.shields.io/npm/v/scraplink.svg)](https://www.npmjs.com/package/scraplink)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/scraplink.svg)](https://github.com/arshadkazmi42/scraplink/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/scraplink.svg)](https://github.com/arshadkazmi42/scraplink/commits/master)


Scralink library, for scraping links and assets url from a webpage

## Install

```
npm install scraplink
```

## Usage

```javascript
const { Scrapper } = require('scraplink');

(async () => {
  const { assets, links } = await Scrapper('http://kaspat.com');
  console.log(assets);
  console.log(links);
})();

// Assets URLS
// 'http://www.theie6countdown.com/images/upgrade.jpg',
// 'http://kaspat.com/images/img1.jpg',
// 'http://kaspat.com/images/img2.jpg',
// 'http://kaspat.com/images/img3.jpg',
// 'http://kaspat.com/images/img4.jpg',
// 'http://kaspat.com/images/page1_img1.jpg',
// 'http://kaspat.com/images/icon1.jpg',
// 'http://kaspat.com/images/icon2.jpg',
// 'http://kaspat.com/images/icon3.jpg',
// 'http://kaspat.com/images/icon4.jpg',
// 'http://www.e-zeeinternet.com/count.php?page=986859&style=odometer&nbdigits=8&reloads=1'

// Links
// 'http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode',
// 'http://kaspat.com/index.php',
// 'http://kaspat.com/index.php',
// 'http://kaspat.com/News.php',
// 'http://kaspat.com/Services.php',
// 'http://kaspat.com/Kaspat.php',
// 'http://kaspat.com/Clients.php',
```

## API

- `Scrapper`
  - Takes url input and scraps assets url and links from the page

- `Parse`
  - Parse exposes two functions, as defined below

  - `assets`
    - Fetches all the assets from the html data

  - `links`
    - Fetches all the links from the html data

- `ScrapperUtil`

  - `formatRelativeUrls`
    - Formats relative urls to absolute (takes rootUrl and array urls as input)

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/scraplink/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
<a href="https://github.com/brantem"><img src="https://github.com/brantem.png" width="30" /></a>
<a href="https://github.com/dependabot[bot]"><img src="https://github.com/dependabot[bot].png" width="30" /></a>
<a href="https://github.com/mariumfirdous"><img src="https://github.com/mariumfirdous.png" width="30" /></a>


