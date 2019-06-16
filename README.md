# scraplink

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

  - `removeEndingSlash`

    - Removes ending slash from the string (for this case from url)
  - `removeStartingSlash`

    - Removes starting slash from the string (for this case from url)
    