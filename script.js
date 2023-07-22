var tl=gsap.timeline();

tl.from("#a1,#a2,#one",{
    y:-50,
    opacity:0,
    delay:.9,
    stagger:.3,
    duration: 1,
    ease: "elastic"
})
.from("#h1",{
    x:-50,
    opacity:0,
    duration: 1,
    ease: "elastic"
})
.from("p",{
    opacity:0
})
.from("#two",{
    x:-600,
    opacity:0,
    rotate:-65
})
.from("#h3",{
    x:-100,
    opacity:0,
})
.from("#three",{
    x:600,
    opacity:0,
    rotate:60
})
.from("#four",{
    y:20,
    repeat:-1,
    yoyo:true,
    opacity:0
})
var h=document.querySelector("#h2");

var clutter='';

var arr=h.textContent.split('');

arr.forEach(function(val){
    clutter+=`<span>${val}</span>`
})
h.innerHTML=clutter;
tl.from("span",{
    y:-100,
    opacity:0,
    stagger:.2,
    duration: 1,
    ease: "elastic"
})