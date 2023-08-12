
    document.addEventListener("DOMContentLoaded", function () {
        const sidebarToggle = document.getElementById("sidebar-toggle");
        const specificSidebar = document.querySelector(".specific-sidebar");

        sidebarToggle.addEventListener("click", function () {
            specificSidebar.classList.toggle("active");
        });

        // Add the click event listener only to the sidebar dropdowns
        const sidebarDropdownLinks = specificSidebar.querySelectorAll('.dropdown > a');
        sidebarDropdownLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent the default link behavior

                // Toggle the display of the associated dropdown menu
                var dropdownMenu = this.nextElementSibling;
                dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
            });
        });
    });

