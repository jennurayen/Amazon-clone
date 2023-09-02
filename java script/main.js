
// hero section image slide animation 
// let slides = document.querySelectorAll(".slide")


// count = 0;

// slides.forEach((slide, index) =>{
//     slide.style.left = `${index * 100}%`
// })

// let imageSlider = ()=>{
//    slides.forEach((slide)=>{
//     slide.style.transform = `translateX(-${count * 100}%)`
//    })
// }

// let goPrev = ()=>{
//     count--
//     count= (count + slides.length)%slides.length
    
//     imageSlider()
// }
// let goNext = ()=>{
//     count++
//     count= count%slides.length
//     imageSlider()
// }




// product section image slide animation 
let scrolls = document.querySelector(".scroll")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

const scrollStep = 1000; 
const scrollSpeed = 300; 


prev.addEventListener("click", () => {
    scrolls.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

next.addEventListener("click", () => {
    scrolls.scrollBy({ left: scrollStep, behavior: "smooth" });
});