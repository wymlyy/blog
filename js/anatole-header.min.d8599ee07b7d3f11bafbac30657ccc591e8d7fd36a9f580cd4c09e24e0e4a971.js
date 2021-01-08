document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    // Check if there are any navbar burgers
=======
// Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
// Check if there are any navbar burgers
>>>>>>> 37992c3dc23086ec3a3695ae7f04e25767918ddf
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener("click", function () {
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                $el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 37992c3dc23086ec3a3695ae7f04e25767918ddf
