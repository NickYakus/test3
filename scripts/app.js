var acc = document.getElementsByClassName("accordion");
var i;
var moveDown = document.getElementsByClassName("slider-show-message");

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var moveDown = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*даун видна 
ап спрятана изначально*/
document.getElementById("drop").addEventListener('click', function() {
    document.getElementById("hide").classList.toggle("active-hiddeN");
    document.getElementById("show").classList.toggle("hidden-activEE");
})
document.getElementById("drop2").addEventListener('click', function() {
    document.getElementById("hide2").classList.toggle("active-hiddeN");
    document.getElementById("show2").classList.toggle("hidden-activEE");
})
document.getElementById("drop3").addEventListener('click', function() {
    document.getElementById("hide3").classList.toggle("active-hiddeN");
    document.getElementById("show3").classList.toggle("hidden-activEE");
})