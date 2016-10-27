function queryHash(location) {
  location    = location || window.location.href;
  var queries = location.split('?')[1];
  var pairs   = queries.split('&');
  var hash    = {};
  
  pairs.forEach(function(pair) {
    var params = pair.split('=');
    hash[params[0]] = params[1];
  }); 

  return hash;
}
