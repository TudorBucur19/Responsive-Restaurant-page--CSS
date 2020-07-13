var burgerButton = document.querySelector(".burger-nav");
var openedMenu = document.querySelector(".nav-menu");

burgerButton.addEventListener("click", function(){
	openedMenu.classList.toggle("open");
});

