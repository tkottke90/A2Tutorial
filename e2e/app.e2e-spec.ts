import { A2TutuorialPage } from './app.po';

describe('a2-tutuorial App', () => {
  let page: A2TutuorialPage;

  beforeEach(() => {
    page = new A2TutuorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
