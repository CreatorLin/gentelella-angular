import { GentelellaAngularPage } from './app.po';

describe('gentelella-angular App', () => {
  let page: GentelellaAngularPage;

  beforeEach(() => {
    page = new GentelellaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
