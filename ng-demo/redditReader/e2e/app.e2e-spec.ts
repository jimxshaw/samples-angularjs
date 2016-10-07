import { RedditReaderPage } from './app.po';

describe('reddit-reader App', function() {
  let page: RedditReaderPage;

  beforeEach(() => {
    page = new RedditReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
