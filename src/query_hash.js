function queryHash(location) {
  location = location || window.location.href;
  var queries, hash = {};

  if (queries = location.split('?')[1]) {
    var pairs   = queries.split('&');
      
    pairs.forEach(function(pair) {
      var params = pair.split('=');
      hash[params[0]] = params[1];
    }); 
  }

  return hash;
}
