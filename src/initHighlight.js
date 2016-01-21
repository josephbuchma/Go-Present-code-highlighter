$(document).ready(function() {
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
