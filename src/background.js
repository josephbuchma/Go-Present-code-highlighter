chrome.tabs.onUpdated.addListener(function(id, info, tab){
  console.log(tab)
  if (tab.url.indexOf(".slide#") >= 0) {
    chrome.pageAction.show(tab.id);
    
  }
});
