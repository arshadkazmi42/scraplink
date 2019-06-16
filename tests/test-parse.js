const { expect } = require('chai');

const { Parse } = require('../lib');

const HTML = '<img src="https://github.com/arshadkazmi42"><a></a><b>Test</b><a href="https://google.com" />Click Here</a><p>This is a paragraph</p><a target="_" href="arshadkazmi42"><img src="test.png" /><img target="_" src="/images/1.png">';


describe('Validates parse functions', () => {
  it('show return all assets url from img tags', () => {
    expect(Parse.assets(HTML)).to.deep.equal([
      'https://github.com/arshadkazmi42',
      'test.png',
      '/images/1.png'
    ]);
  });
  it('show return all links from a tags', () => {
    expect(Parse.links(HTML)).to.deep.equal([
      'https://google.com',
      'arshadkazmi42'
    ]);
  });
});
