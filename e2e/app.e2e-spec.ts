import { AppPage } from './app.po';

describe('mean-frontend-antezana-angel App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sky!');
  });
});
