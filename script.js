const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("header nav");
menuButton.addEventListener("click", function() {
    navigation.classList.toggle("active");
});
const menuLink =document.querySelectorAll("header nav a");
menuLink.forEach (function(link) {
    link.addEventListener("click", function() {
        navigation.classList.toggle("active");
    });
});


