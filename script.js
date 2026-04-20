function getRecipes() {
  const q = document.getElementById("search").value || "chicken";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`)
    .then(res => res.json())
    .then(data => {
      const box = document.getElementById("recipes");
      box.innerHTML = "";

      if (!data.meals) {
        box.innerHTML = "No results found";
        return;
      }

      data.meals.forEach((meal, index) => {

        let ingredients = "";
        for (let i = 1; i <= 20; i++) {
          if (meal["strIngredient" + i]) {
            ingredients += `<li>${meal["strIngredient" + i]}</li>`;
          }
        }

        box.innerHTML += `
          <div class="card">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}">
            <p><b>Category:</b> ${meal.strCategory}</p>
            <p><b>Area:</b> ${meal.strArea}</p>

            <button onclick="toggle(${index})">View Recipe</button>

            <div class="details" id="d${index}">
              <h4>Ingredients:</h4>
              <ul>${ingredients}</ul>
              <h4>Instructions:</h4>
              <p>${meal.strInstructions}</p>
            </div>
          </div>
        `;
      });
    });
}

function toggle(id) {
  const el = document.getElementById("d" + id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

getRecipes();
