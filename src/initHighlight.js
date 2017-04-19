$(document).ready(function() {
  chrome.storage.sync.get({
    colorscheme: 'github.css',
  }, function(opts) {
    setColorscheme(opts.colorscheme)
  });


  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "set_colorscheme")
        setColorscheme(request.val);
  });


  $('div.code pre').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('button.run').hover(function(){
    $('.current div.code').each(function(i, code){
      var cp;
      $(code).find('pre.hljs').each(function(i, block){
        if ($(block).css("display") != "none") {
          if (typeof(cp) === "undefined" ) {
            cp = $(block)
            return true
          }
          cp.append("\n"+$(block).html());
          $(block).remove();
        }
      });
      cp.html(cp.text());
      hljs.highlightBlock(cp[0]);
    });
  });
});

function setColorscheme(css) {
  try{
    $('#colorscheme_css').remove();
  } catch(e) {}
  $('head').append( $('<link id="colorscheme_css" rel="stylesheet" type="text/css" />').attr('href', chrome.extension.getURL("lib/hl/styles/"+css))  );
}
