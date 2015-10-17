var enabled = true;

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (enabled) {
        url = details.url
        protocol = url.split(":")[0]
        subreddit = url.split("/").slice(3).join("/")
        return {redirectUrl: protocol+"://www.reddit.com/r/"+subreddit};
      }
    },
    {urls: ["*://r/*"]},
    ["blocking", "requestBody"]);

