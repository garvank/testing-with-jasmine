describe('Query Hash', function() {
  it('should return hash of query strings and values', function() {
    var url      = 'http://invoca.com?utm_source=sb-js&utm_campaign=lightning-talks';
    var expected = {utm_source: 'sb-js', utm_campaign: 'lightning-talks'}; 
    var hash = queryHash(url);

    expect(hash).toEqual(expected);
  });

  it('should return an empty hash when no query strings are present', function() {
    var url      = 'http://invoca.com';
    var expected = {};
    var hash = queryHash(url);

    expect(hash).toEqual(expected);
  });
});
