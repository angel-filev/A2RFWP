import { HomePage } from './app.root';

describe('a2-cli App', function() {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display message saying Hello from Angular App with Webpack', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from Angular App with Webpack');
  });

});
