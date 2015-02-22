var listener = function(details) {
  console.log(details.url);
  return {
    redirectUrl: 'http://poop.bike'
  };
};

var regex = /http:\/\/en.wikipedia.org\/wiki\/Liverpool/;

var redirect = function(url) {
  if (url.match(regex)) {
    url = 'http://en.m.wikipedia.org/wiki/Liverpool';
  }
  return url;
}

var filter = { urls : ["<all_urls>"] };

if (typeof chrome !== 'undefined' && typeof chrome.webRequest !== 'undefined') {
  chrome.webRequest.onBeforeRequest.addListener(listener, filter, ["blocking"]);
} else if (typeof module !== 'undefined') {
  module.exports = redirect;
}
