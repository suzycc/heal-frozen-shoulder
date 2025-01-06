(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  // document.addEventListener('click', function(e) {
  //   var target = e.target;

  //   if(!checkbox.checked ||
  //      sidebar.contains(target) ||
  //      (target === checkbox || target === toggle)) return;

  //   checkbox.checked = false;
  // }, false);

  document.addEventListener('click', function(e) {
    var target = e.target;
  
    console.log('Clicked target:', target);
  
    if (!checkbox.checked) {
      console.log('Sidebar already closed');
      return;
    }
  
    if (sidebar.contains(target) || target === checkbox || target === toggle) {
      console.log('Click inside sidebar or on toggle');
      return;
    }
  
    console.log('Closing sidebar');
    checkbox.checked = false;
  }, false);

})(document);
