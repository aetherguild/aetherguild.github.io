document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const smallHeader = document.getElementById("small-header");
    const sidebarToggle = document.getElementById("sidebar-toggle");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("visible");
        
        // Toggle the small header only when the screen size is below 1400px
        if (window.innerWidth <= 1400) {
            smallHeader.classList.toggle("visible");
        }
    });

    // Show or hide the small header based on initial screen size
    if (window.innerWidth <= 1400) {
        smallHeader.classList.add("visible");
    } else {
        smallHeader.classList.remove("visible");
    }
});