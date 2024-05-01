const allStars = document.querySelectorAll(".star");

allStars.forEach((star, i) => {
  star.onclick = function () {
    let currentStarLevel = i + 1;
    // console.log(currentStarLevel);
    allStars.forEach((star, j) => {
      if (currentStarLevel >= j + 1) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });
  };
});
