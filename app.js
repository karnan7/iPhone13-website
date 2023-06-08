const tlIntro = gsap.timeline({
    scrollTrigger : {
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    }
});

const tlH = gsap.timeline({
    scrollTrigger : {
        trigger: ".second-page",
        start: "-40%",
        end: "40%",
        scrub: true,
        markers: { startColor: "blue", endColor: "blue"}
    }
})

tlH.fromTo(
    ".highlight", 
    {color: "rgba(255, 255, 255, 0.4)"},
    {color: "rgba(255, 255, 255, 1)", stagger: 1}
)

const tlHRemove = gsap.timeline({
    scrollTrigger : {
        trigger: ".second-page",
        start: "-20%",
        end: "60%",
        scrub: true,
    }
})

tlHRemove.to(".highlight", 
    {color: "rgba(255, 255, 255, 0.4)", stagger: 1},
)

const tlSplit = gsap.timeline({
    scrollTrigger : {
        trigger: ".third-page",
        start: "-10%",
        end: "25%",
        scrub: true,
        markers: true,
    }
})

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" },)

tlSplit.fromTo( ".small-phone", { x: "-40%"}, { x: "-20%"}, "<" )

tlSplit.fromTo(
    ".product-text-left",
    { x : "50%", opacity: 0 },
    { x : "0%", opacity: 1 }, "<"
)

tlSplit.fromTo(
    ".product-text-right",
    { x : "-50%", opacity: 0 },
    { x : "0%", opacity: 1 }, "<"
)

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "10%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    }
})

const swatches = document.querySelectorAll(".swatches img")
const gallery = document.querySelector('.phone-gallery') 
const slides = document.querySelectorAll(".phone-gallery-container")

let currentSwatch = "blue"
let topIndex = 2

swatches.forEach((swatch, index) => {

    let co = slides[index].getBoundingClientRect().left;

    swatch.addEventListener("click", (e) => {
        let swatchName = e.target.getAttribute("swatch")
        let closeUp = document.querySelector("."+swatchName)

        if(currentSwatch === swatchName) return
        
        gsap.set(closeUp, {zIndex:topIndex})
        gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1})

        topIndex++
        currentSwatch = swatchName ;
    })
})
