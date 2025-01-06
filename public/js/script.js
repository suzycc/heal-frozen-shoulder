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

(function (document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function (e) {
    var target = e.target;

    console.log('Clicked target:', target);

    // If the sidebar is already closed, do nothing
    if (!checkbox.checked) {
      console.log('Sidebar already closed');
      return;
    }

    // Handle clicks inside the sidebar
    if (sidebar.contains(target)) {
      console.log('Click inside sidebar');

      // Close sidebar if the click is on a sidebar link
      if (target.tagName === 'A') {
        console.log('Sidebar link clicked, closing sidebar');
        checkbox.checked = false;
      }
      return; // Do not close the sidebar for other clicks inside it
    }

    // Handle clicks on the toggle button or checkbox itself
    if (target === checkbox || target === toggle) {
      console.log('Click on toggle or checkbox');
      return;
    }

    // Close sidebar for clicks outside of it
    console.log('Click outside sidebar, closing sidebar');
    checkbox.checked = false;
  });
})(document);
