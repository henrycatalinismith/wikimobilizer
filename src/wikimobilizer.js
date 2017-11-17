var Wikimobilizer = {
  listen: function(event) {
    var filter = { urls : ["<all_urls>"] };
    event.addListener(this.redirect.bind(this), filter, ["blocking"]);
  },

  redirect: function(details) {
    var redirectUrl = this.transformUrl(details.url);
    if (redirectUrl !== details.url) {
      return {
        redirectUrl: redirectUrl
      };
    } else {
      return {};
    }
  },

  transformUrl: function(url) {
    var regex = /https?:\/\/([a-z]{2}).wikipedia.org\/wiki\/([^\/]+)/;
    var match = url.match(regex);
    if (match) {
      url = 'https://' + match[1] + '.m.wikipedia.org/wiki/' + match[2];
    }
    return url;
  }

};

if (typeof browser !== "undefined" && typeof browser.webRequest !== 'undefined') {
  Wikimobilizer.listen(browser.webRequest.onBeforeRequest);
} else if (typeof chrome !== "undefined" && typeof chrome.webRequest !== 'undefined') {
  Wikimobilizer.listen(chrome.webRequest.onBeforeRequest);
} else if (typeof module !== 'undefined') {
  module.exports = Wikimobilizer;;
}
