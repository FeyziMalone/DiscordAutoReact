browser.runtime.onMessage.addListener((message) => {
  console.log(message.greeting);
});
browser.webRequest.onBeforeSendHeaders.addListener(
 
  function(details) {
    const headers = details.requestHeaders;
    let authToken;
    console.log("asddddddddd"+details);
    for (const header of headers) {
      if (header.name === 'Authorization') {
        const tokenMatch = header.value.match(/Bearer (.+)/);
        if (tokenMatch) {
          authToken = tokenMatch[1];
          break;
        }
      }
    }

    if (authToken) {
      console.log(authToken);
      // Do something with the token, like store it or send it to your server
    }
  },
  {urls: ["<all_urls>"]},
  ["requestHeaders", "blocking"]
);
