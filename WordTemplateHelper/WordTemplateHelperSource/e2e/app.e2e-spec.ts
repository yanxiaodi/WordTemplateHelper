import { WordTemplateHelperSourcePage } from './app.po';

describe('word-template-helper-source App', () => {
  let page: WordTemplateHelperSourcePage;

  beforeEach(() => {
    page = new WordTemplateHelperSourcePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
