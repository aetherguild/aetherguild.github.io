var dropdownLinks = document.querySelectorAll('.dropdown > a');
dropdownLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Toggle the display of the associated dropdown menu
    var dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display = (dropdownMenu.style.display === 'none') ? 'block' : 'none';
  });
});