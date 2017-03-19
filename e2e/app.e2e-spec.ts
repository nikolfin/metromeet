import { MetromeetPage } from './app.po';

describe('metromeet App', function() {
  let page: MetromeetPage;

  beforeEach(() => {
    page = new MetromeetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
