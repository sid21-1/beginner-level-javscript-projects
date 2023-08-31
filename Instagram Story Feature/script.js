var arr=[
    {
        dp:"https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400",
        story:"https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=400"
    }, 
    {
        dp:"https://images.pexels.com/photos/17910602/pexels-photo-17910602/free-photo-of-vegetables.png?auto=compress&cs=tinysrgb&w=400&lazy=load",
        story:"https://images.pexels.com/photos/17813828/pexels-photo-17813828/free-photo-of-young-girl-reading-a-book-at-a-picnic-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    }, 
    {
        dp:"https://images.pexels.com/photos/13203904/pexels-photo-13203904.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        story:"https://images.pexels.com/photos/18114557/pexels-photo-18114557/free-photo-of-city-restaurant-people-hotel.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    }, 
    {
        dp:"https://images.pexels.com/photos/17119475/pexels-photo-17119475/free-photo-of-man-selling-fresh-fruit-at-a-market.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        story:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
]

let idStory= document.querySelector("#idStory");
let clutter =""
arr.forEach(function(elem, index){
    clutter +=`<div class="story">
    <img id="${index}" src="${elem.dp} "alt=""/> </div>`
})

idStory.innerHTML = clutter

idStory.addEventListener("click", function (dets){
    let value = arr[dets.target.id].story //Golden value important point 
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${value})`

    setTimeout(function (){
        document.querySelector("#full-screen").style.display = "none";
    },2000)
});





