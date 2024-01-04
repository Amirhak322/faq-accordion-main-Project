var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if(this.classList.contains('active')){
      this.querySelector('img').setAttribute('src', "assets/images/icon-plus.svg");
    }
    else{
      this.querySelector('img').setAttribute('src', "assets/images/icon-minus.svg");
    }
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
