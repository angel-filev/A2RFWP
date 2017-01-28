import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}
