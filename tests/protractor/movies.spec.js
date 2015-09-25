describe('Using movies.ng-book.com', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should have a title', function() {
    expect(
      element(by.css('h2'))
    ).toBeDefined();
  });

  it('should have the heading 21 Movies', function() {
    expect(
      element(by.css('h2')).getText()
    ).toBe('21 Movies');
  });

  it('should filter the movies by the given search query', function() {
    var title;
    element(by.css('h2')).getText().then(function(value){
      title = value;
    });

    element(by.model('search.trackName')).sendKeys('insi').then(function() {
      expect(
        element(by.css('h2')).getText()
      ).not.toBe(title);
    });
  });
});
