
$(function(){
  chrome.storage.sync.get({
    colorscheme: 'github.css'
  }, function(opts) {
      $("#colorscheme").val(opts.colorscheme)
  });
  $('#colorscheme').change(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'set_colorscheme', val:$('#colorscheme').val()}, function(response) {
        console.log(response.farewell);
      });
    });
  })
})
