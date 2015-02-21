chrome.webRequest.onBeforeRequest.addListener(function(details) {
  console.log(details.url);
});
