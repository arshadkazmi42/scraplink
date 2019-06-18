const { expect } = require('chai');

const { Scrapper } = require('../index');

describe('Validates scrape functions', () => {
  it('show links and assets of kaspat.com', async () => {
    const { assets, links } = await Scrapper('http://kaspat.com');
    expect(assets).to.deep.equal([
      'http://www.theie6countdown.com/images/upgrade.jpg',
      'http://kaspat.com/images/img1.jpg',
      'http://kaspat.com/images/img2.jpg',
      'http://kaspat.com/images/img3.jpg',
      'http://kaspat.com/images/img4.jpg',
      'http://kaspat.com/images/page1_img1.jpg',
      'http://kaspat.com/images/icon1.jpg',
      'http://kaspat.com/images/icon2.jpg',
      'http://kaspat.com/images/icon3.jpg',
      'http://kaspat.com/images/icon4.jpg',
      'http://www.e-zeeinternet.com/count.php?page=986859&style=odometer&nbdigits=8&reloads=1'
    ]);
    expect(links).to.deep.equal([
      'http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode',
      'http://kaspat.com/index.php',
      'http://kaspat.com/index.php',
      'http://kaspat.com/News.php',
      'http://kaspat.com/Services.php',
      'http://kaspat.com/Kaspat.php',
      'http://kaspat.com/Clients.php',
      'http://kaspat.com/down-win8-pro-to-win7.php',
      'http://kaspat.com/remove-virus-forever.php',
      'http://kaspat.com/enabling-modern-apps.php',
      'http://kaspat.com/safe-mode-win8.php',
      'http://kaspat.com/Welcome_Visitor.php',
      'http://kaspat.com/we-are-hiring.php',
      'http://kaspat.com/Welcome-Visitor.php',
      'http://kaspat.com/Kaspat-Services.php',
      'http://kaspat.com/Why-us.php',
      'http://kaspat.com/mailto:',
      'https://www.facebook.com/KASPATSolutionsPossible.DeliveringtheBest',
      'https://twitter.com/Kaspat1',
      'http://www.linkedin.com/company/kaspat/',
      'http://kaspatsolutions.blogspot.in/',
      'http://www.symantec.com/ssl-certificates',
      'http://www.e-zeeinternet.com/',
      'http://www.kaspat.com/'
    ]);
  }).timeout(3000);
  it('show links and assets of https://www.npmjs.com/settings/arshadkazmi42/packages', async () => {
    const { assets, links } = await Scrapper('https://www.npmjs.com/settings/arshadkazmi42/packages');
    expect(assets).to.deep.equal([
      'https://static.npmjs.com/97ce287600f35d9d5f2ed500630bb0ad.png',
      'https://static.npmjs.com/a39ceb9e9ad640f4de8eee094063d890.png',
      'https://static.npmjs.com/ecc2a793db0bd5966246e970f9c9ff5e.png',
      'https://static.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png',
      'https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png'
    ]);
    expect(links).to.deep.equal([
      'https://www.npmjs.com/settings/arshadkazmi42/packages/',
      'https://www.npmjs.com/settings/arshadkazmi42/packages/forgot',
      'https://www.npmjs.com/settings/arshadkazmi42/packages/signup?next=%2Fsettings%2Farshadkazmi42%2Fpackages'
    ]);
  }).timeout(3000);
});
