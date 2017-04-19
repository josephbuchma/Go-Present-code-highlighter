
// Saves options to chrome.storage
function saveOptions() {
  var options = {};
  $.each($(".option"), function(_, el){
    console.log($(el).attr('id'), $(el).val());
    options[$(el).attr('id')] = $(el).val();
  });
  chrome.storage.sync.set(options, function() {
    var status = $('#status');
    status.html('Options saved.');
    setTimeout(function() {
      status.html('');
    }, 1200);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value colorscheme = 'red' and likesColor = true.
  chrome.storage.sync.get({
    colorscheme: 'github.css'
  }, function(items) {
    $.each(items, function(k, v){
      $("#"+k).val(v)
    })
  });
  var status = $('#status');
  status.html('Options restored.');
  setTimeout(function() {
    status.html('');
  }, 1200);
}

$(function(){
  restoreOptions();
  $("#save").click(function(e){
    saveOptions()
  })
})
