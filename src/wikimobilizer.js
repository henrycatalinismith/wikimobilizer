var listener = function(details) {
  return {
    redirectUrl: redirect(details.url)
  };
};

var regex = /http:\/\/en.wikipedia.org\/wiki\/([^\/]+)/;

var redirect = function(url) {
  var match = url.match(regex);
  if (match) {
    url = 'http://en.m.wikipedia.org/wiki/' + match[1];
  }
  return url;
}

var filter = { urls : ["<all_urls>"] };

if (typeof chrome !== 'undefined' && typeof chrome.webRequest !== 'undefined') {
  chrome.webRequest.onBeforeRequest.addListener(listener, filter, ["blocking"]);
} else if (typeof module !== 'undefined') {
  module.exports = redirect;
}
