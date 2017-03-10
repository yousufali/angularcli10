import { Angularcli1Page } from './app.po';

describe('angularcli1 App', () => {
  let page: Angularcli1Page;

  beforeEach(() => {
    page = new Angularcli1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
