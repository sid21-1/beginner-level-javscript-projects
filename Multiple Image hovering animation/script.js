let box = document.querySelectorAll(".box");

box.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        console.log("Hello")
    })
})





















// let boxImage = document.querySelector("#box1 img");

// box.addEventListener("mousemove", function(dets) {
//    boxImage.style.left = dets.x + "px";
//    boxImage.style.top = dets.y + "px";
// });

// box.addEventListener("mouseenter", function(dets) {
//     boxImage.style.opacity=1;
//  });

//  box.addEventListener("mouseleave", function(dets) {
//     boxImage.style.opacity=0;
//  });