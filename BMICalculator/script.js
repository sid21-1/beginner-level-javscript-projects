const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (parseInt(bmi) <= 18.6) {
      console.log("underweight");
    } else if (parseInt(bmi) >= 18.6 && parseInt(bmi) <= 24.9) {
      console.log("normal weight");
    } else if (parseInt(bmi) > 24.9) {
      console.log("overweight");
    }
  }
});
