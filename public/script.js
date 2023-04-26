let collapse = document.querySelector('.collapsse')
let openMenu = document.querySelector('.open-menu')
let closeMenu = document.querySelector('.close-menu')


openMenu.onclick = function () {
  collapse.classList.add('show')
}
closeMenu.onclick = function () {
  collapse.classList.remove('show')
}




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdownn").classList.toggle("show-dr");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnn')) {
    var dropdowns = document.getElementsByClassName("dropdownn-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-dr')) {
        openDropdown.classList.remove('show-dr');
      }
    }
  }
}