function openSection(evt, section) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active";
};

const scrolltop = document.querySelector("#top");
window.addEventListener("scroll", () =>{
    if (window.pageYoffset > 100) {
        scrolltop.classList.add("active");
    }
    else {
        scrolltop.classList.remove("active");
    }
});

let valueDisplays = document.querySelectorAll(".demo");
let interval = 5000;
valueDisplays.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue  == endValue ){
                clearInterval(counter);
            }
        
    }, duration);
});


