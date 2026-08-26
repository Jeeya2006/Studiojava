const box=document.querySelector(".cursor-box")

const fixedmenu=document.querySelector(".fixed-menu")
const menuBtn=document.querySelector(".menuBtn")

const pointer = document.querySelector(".pointer")
document.addEventListener("mousemove",(e)=>{
    pointer.style.left=e.clientX+ "px"
    pointer.style.top=e.clientY +"px"
    pointer.style.transition="linear 0.1"
})

menuBtn.addEventListener("click",()=>{
    const isOpen=fixedmenu.style.top==="0%"
    fixedmenu.style.top=isOpen?"-100%":"0%"
    
})

if(box){
    
    document.addEventListener("mousemove",(e)=>{
        // pointer.style.visibility="hidden"
        box.style.left=e.clientX+ "px"
        box.style.top=e.clientY +"px"
        box.style.transition="linear 0.3s"
    })
}


document.querySelector(".hero").addEventListener("mousemove",()=>{
    pointer.style.visibility="hidden"
    box.style.visibility = "visible"
})
document.querySelector(".hero").addEventListener("mouseleave",()=>{
    box.style.visibility = "hidden"
    pointer.style.visibility="visible"
})

// const trigger = document.querySelector(".hover-trigger")
// const cards = document.querySelectorAll(".stack-card")

// trigger.addEventListener("mouseenter",()=>{
//     cards.forEach((card)=>{
//         card.classList.add("show")
//     })
//     // card.classList.add("show")
// })
// trigger.addEventListener("mouseleave",()=>{
//     // card.classList.add("show")
//     cards.forEach((card)=>{
//         card.classList.remove("show")
//     })

//     const rotation = [-8,8,-6,6]
//     cards.forEach((card,idx)=>{
//         card.style.transform =`rotate(${rotation[idx]}deg)`
//     })
// })

const triggers = document.querySelectorAll(".hover-trigger")
const rotation=[-8,8,-6,6]
triggers.forEach((trigger)=>{
    const cards = trigger.querySelectorAll(".stack-card")

    let idx = 0
    let zidx = 10

    trigger.addEventListener("mouseenter",()=>{
        setInterval(()=>{//dele karta ml secound me hota
            const card=cards[idx];
            zidx++;
            card.style.zIndex = zidx
            card.style.opacity="1"

            card.style.transform=`rotate(${rotation[idx]}deg)`
            idx++;

            if(idx==cards.length){
                idx=0
            }
        },300)
    })
})




// const boxCont = document.querySelector(".box-cont");
// const video = boxCont.querySelector("video");

// boxCont.addEventListener("mouseenter", () => {
//   video.style.display = "block";
//   video.play();
// });

// boxCont.addEventListener("mouseleave", () => {
//   video.pause();
//   video.currentTime = 0; 
//   video.style.display = "none"; 
// });


// document.querySelector(".box1").addEventListener("mouseenter",()=>{
  
//     pointer.style.width="100px";
// })
// document.querySelector(".box1").addEventListener("mouseleave",()=>{
  
//     pointer.style.width="100px";
// })


const menuItems = document.querySelectorAll(".menu-item");

const previewCard = document.querySelector("#previewCard");
const previewVideo = document.querySelector("#previewVideo");

menuItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        previewCard.classList.add("active");

        previewVideo.src = item.dataset.video;

        previewVideo.play();

        previewVideo.playbackRate = 3.0;
    });

    item.addEventListener("mouseleave", () => {

        previewCard.classList.remove("active");

        previewVideo.pause();
    });

});
