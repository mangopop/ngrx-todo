import { NgrxTodo3Page } from './app.po';

describe('ngrx-todo3 App', function() {
  let page: NgrxTodo3Page;

  beforeEach(() => {
    page = new NgrxTodo3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
