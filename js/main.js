let headerBurger = document.querySelector('.header__burger');
let hbSpan = document.querySelectorAll('.burger');
let headerList = document.querySelector('.header__list')



headerBurger.addEventListener('click', function () {
    
    // hbSpan[1].style.display = 'none'
    // hbSpan[0].style.transform = 'rotate(-45deg) translateY(-50%)' 
    // hbSpan[0].style.top = '50%' 
    // hbSpan[2].style.transform = 'rotate(45deg) translateY(50%)' 
    // hbSpan[2].style.bottom = '50%'
    
    headerBurger.classList.toggle('active')
    
    hbSpan.forEach(spans => {
        
        spans.classList.toggle('active')
        
        // if (spans.classList.contains == 'active') {
            //     spans.classList.remove('active')
        // } else {
            //     spans.classList.add('active')
            // }
        });
    
        headerList.classList.toggle('active')
        
    })
    
//     let headerCImg = document.querySelector('.header__content-img')
// let wWith = document.body.clientWidth
// let imgWidth = wWith - 30 + 'px'

// if (wWith <= 400) {
//     headerCImg.style.width = imgWidth
//     headerCImg.style.height = imgWidth
// }


// let headerLink = document.querySelectorAll(".header__link")

let headerTitle = document.querySelector('.header__content-title')
let servicesTitle = document.querySelector(".services__title")
let designTitle = document.querySelector(".design__title")
let TeamworkTitle = document.querySelector(".teamwork__title")
let testimonialTitle = document.querySelector(".testimonial__title")



function func(text) {
    let txt = text.innerHTML
    text.innerHTML = ""
    
    function typin(x = 0 ) {
        text.innerHTML += txt[x]
        x++
    
        if (x < txt.length) {
            setTimeout(() => {
                typin(x)
            }, 200);
        }
    
    }
    
    window.addEventListener("scroll", function scrTitle() {
                
        if (this.scrollY >= text.offsetTop - text.offsetHeight * 2) {
            typin()
            this.removeEventListener("scroll", scrTitle)
        }
    })
    
}

func(headerTitle)
func(servicesTitle)
func(designTitle)
func(TeamworkTitle)
func(testimonialTitle)

let brends = document.querySelector(".brends")
let servicesCards = document.querySelector(".services__cards")

window.addEventListener("scroll", () => {
    fadeRight(brends)
    fadeRight(servicesCards)
    fadeLeft(brends)
    fadeLeft(servicesCards)
})

function fadeRight(section) {
    let fadeRight = section.querySelectorAll(".fade-right")
    let center = section.querySelector(".center")
    let fadeLeft = section.querySelectorAll(".fade-left")

    fadeRight.forEach(fadeRights => {

        const speed = +fadeRights.getAttribute("data-speed")
        fadeRights.style.transition = speed + "ms"

        if (window.scrollY >= section.offsetTop - section.offsetHeight * 2) {
            fadeRights.classList.add("active")
        } else {
            fadeRights.classList.remove("active")
        }
    });

    fadeLeft.forEach(fadeLefts => {

        const speed = +fadeLefts.getAttribute("data-speed")
        fadeLefts.style.transition = speed + "ms"

        if (window.scrollY >= section.offsetTop - section.offsetHeight * 2) {
            fadeLefts.classList.add("active")
        } else {
            fadeLefts.classList.remove("active")
        }
    });

    center.classList.add('active')

}


let testimonialImg = document.querySelector(".testimonial__img-bg")

// testimonialImg.forEach(img => {
    testimonialImg.addEventListener("mousemove", rotate)
    testimonialImg.addEventListener("mouseout", rotateNone)
// });

function rotate(e) {

    const X = (this.offsetHeight / 2 - e.offsetY) / 50
    const Y = (e.offsetX - this.offsetWidth / 2) / 50

    this.style.transform = `perspective(400px) rotateX(${X}deg) rotateY(${Y}deg)`
}

function rotateNone() {
    this.style.transform = `perspective(400px) rotate(0)`
}


let bloob = document.querySelectorAll(".bloob")

window.addEventListener("mousemove", (e) => {

    bloob.forEach(balls => {

        const speed = balls.getAttribute("data-speed")

        const X = (window.innerWidth - e.pageX * speed) / 50
        const Y = (window.innerHeight - e.pageY * speed) / 100

        balls.style.transform = `translate(${X}px, ${Y}px)`

    });
})