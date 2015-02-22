var listener = function(details) {
  console.log(details.url);
  return {
    redirectUrl: 'http://poop.bike'
  };
};

var filter = { urls : ["<all_urls>"] };

chrome.webRequest.onBeforeRequest.addListener(listener, filter, ["blocking"]);
