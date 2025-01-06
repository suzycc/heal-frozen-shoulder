// (function(document) {
//   var toggle = document.querySelector('.sidebar-toggle');
//   var sidebar = document.querySelector('#sidebar');
//   var checkbox = document.querySelector('#sidebar-checkbox');

//   document.addEventListener('click', function(e) {
//     var target = e.target;

//     if(!checkbox.checked ||
//        sidebar.contains(target) ||
//        (target === checkbox || target === toggle)) return;

//     checkbox.checked = false;
//   }, false);

// })(document);



(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  // Existing functionality to close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    var target = e.target;

    if (!checkbox.checked ||
        sidebar.contains(target) ||
        (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);

  // Add functionality to close sidebar when clicking anchor links
  document.addEventListener('click', function(e) {
    var target = e.target;

    // Check if the click was on a sidebar anchor link
    if (target.tagName === 'A' && target.closest('#sidebar')) {
      checkbox.checked = false; // Close the sidebar
    }
    console.log('Clicked target:', target);
  }, false);
})(document);
