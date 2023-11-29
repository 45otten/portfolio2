var typed= new Typed(".typing",{
    strings:["Web Designer","Web Develpor"],
    typeSpeed:120,
    BackSpeed:5,
    loop:true
});

var typed=new Typed(".about-me",{
    strings:["I'm a web Designer with extensive experience for over 5 years. My expertise is to create and website design, graphic design, and many more...","I'm a web dev as well.I can creat a well optimized and secure backend for your site"],
    typedSpeed:300,
    BackSpeed:300,
    loop:true
});

const nav = document.querySelector(".nav");

nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        nav.querySelectorAll("li a").forEach(function (item) {
            item.classList.remove("active");
        });
        event.target.classList.add("active");
        showSection(event.target);
    }
});
function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    document.querySelectorAll(".section").forEach(function (section) {
        section.classList.remove("active");
    });
    document.querySelector("#" + target).classList.add("active");
}


