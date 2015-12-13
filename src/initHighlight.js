$(document).ready(function() {
  $('div.code pre').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
