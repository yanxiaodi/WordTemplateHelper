import { WordTemplateHelperSourcePage } from './app.po';

describe('word-template-helper-source App', () => {
  let page: WordTemplateHelperSourcePage;

  beforeEach(() => {
    page = new WordTemplateHelperSourcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
