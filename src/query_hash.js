function queryHash(location) {
  location    = location || window.location.href;
  var hash    = {};
  var queries = location.split('?')[1];
  var pairs   = queries.split('&');
    
  pairs.forEach(function(pair) {
    var params = pair.split('=');
    hash[params[0]] = params[1];
  }); 

  return hash;
}
