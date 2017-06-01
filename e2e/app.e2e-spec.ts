import { ReportPage } from './app.po';

describe('report App', () => {
  let page: ReportPage;

  beforeEach(() => {
    page = new ReportPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
