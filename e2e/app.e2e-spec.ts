import { TheWeatherWidgetPage } from './app.po';

describe('the-weather-widget App', () => {
  let page: TheWeatherWidgetPage;

  beforeEach(() => {
    page = new TheWeatherWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
