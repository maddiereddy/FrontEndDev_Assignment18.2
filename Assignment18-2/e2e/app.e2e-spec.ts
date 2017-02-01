import { Assignment182Page } from './app.po';

describe('assignment18-2 App', function() {
  let page: Assignment182Page;

  beforeEach(() => {
    page = new Assignment182Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
