var default_options = {
  blocked_urls: [],
  enabled: true,
  blocked_time: 60,
  break_time: 15
};

// Storage helpers

function load_options(callback) {
  chrome.storage.sync.get(default_options, function(options) {
    callback(options);
  });  
}

function store_options(options, callback) {
  chrome.storage.sync.set(options, function() {
    chrome.runtime.sendMessage(options);
    if(callback) {
      callback();
    }
  });
}
