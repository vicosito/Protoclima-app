import { ProtoclimaAppPage } from './app.po';

describe('protoclima-app App', () => {
  let page: ProtoclimaAppPage;

  beforeEach(() => {
    page = new ProtoclimaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
