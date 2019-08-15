module.exports = {
    'Demo test Google' : function (client) {
      client
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .end();
    }
  };