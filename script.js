const recipes = [
  {
    name: "Veggie Delight",
    imageSrc: "./Assets/Img1.svg",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "./Assets/Img2.svg",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "./Assets/Img3.svg",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "./Assets/Img4.svg",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "./Assets/Img1.svg",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "./Assets/Img2.svg",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "./Assets/Img3.svg",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "./Assets/Img4.svg",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "./Assets/Img1.svg",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "./Assets/Img2.svg",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "./Assets/Img3.svg",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "./Assets/Img4.svg",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "./Assets/Img1.svg",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "./Assets/Img2.svg",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "./Assets/Img3.svg",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const showAllBtn = document.getElementById("showAllBtn");
const showVegBtn = document.getElementById("showVegBtn");
const showNonVegBtn = document.getElementById("showNonVegBtn");
const ratingAboveRadio = document.getElementById("ratingAbove");
const ratingBelowRadio = document.getElementById("ratingBelow");

function generateRecipeCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  const image = document.createElement("img");
  image.src = recipe.imageSrc;
  card.appendChild(image);

  const name = document.createElement("h3");
  name.textContent = recipe.name;
  card.appendChild(name);

  const type = document.createElement("p");
  type.textContent = `${recipe.type}`;
  card.appendChild(type);

  const time = document.createElement("p");
  time.textContent = `${recipe.time}`;
  card.appendChild(time);

  const rating = document.createElement("p");
  rating.textContent = `⭐ ${recipe.rating}`;
  card.appendChild(rating);

  const likeButton = document.createElement("span");
  likeButton.classList.add("like-button");
  likeButton.addEventListener("click", () => {
    recipe.isLiked = !recipe.isLiked;
    likeButton.textContent = recipe.isLiked ? "❤️" : "🖤";
  });

  likeButton.textContent = recipe.isLiked ? "❤️" : "🖤";

  card.appendChild(likeButton);

  recipeContainer.appendChild(card);
}

function filterRecipes(searchQuery) {
  recipeContainer.innerHTML = "";

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}

searchInput.addEventListener("input", (event) => {
  const searchQuery = event.target.value.trim();
  filterRecipes(searchQuery);
});

function toggleRecipeDisplay(type) {
  recipeContainer.innerHTML = "";

  let filteredRecipes;
  if (type === "all") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => recipe.type === type);
  }

  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}
showAllBtn.addEventListener("click", () => toggleRecipeDisplay("all"));
showVegBtn.addEventListener("click", () => toggleRecipeDisplay("veg"));
showNonVegBtn.addEventListener("click", () => toggleRecipeDisplay("non-veg"));

function filterRecipesByRating() {
  recipeContainer.innerHTML = "";

  let filteredRecipes;
  if (ratingAboveRadio.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
  } else if (ratingBelowRadio.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  } else {
    filteredRecipes = recipes;
  }

  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}

ratingAboveRadio.addEventListener("change", filterRecipesByRating);
ratingBelowRadio.addEventListener("change", filterRecipesByRating);

recipes.forEach((recipe) => {
  generateRecipeCard(recipe);
});

const openDrawerButton = document.getElementById("openDrawerButton");
const closeDrawerButton = document.getElementById("closeDrawerButton");
const mobileDrawer = document.getElementById("mobileDrawer");
const nav = document.querySelector("#nav-right");

function openDrawer() {
  mobileDrawer.style.display = "block";
  mobileDrawer.style.left = "0";
}

function closeDrawer() {
  mobileDrawer.style.left = "-80%";
}

openDrawerButton.addEventListener("click", openDrawer);

closeDrawerButton.addEventListener("click", closeDrawer);

function toggleMenuIcon() {
  if (window.innerWidth <= 786) {
    nav.style.display = "none"; 
    openDrawerButton.style.display = "block";
  } else {
    nav.style.display = "flex"; 
    openDrawerButton.style.display = "none"; 
    mobileDrawer.style.display = "none"; 
  }
}

toggleMenuIcon();
window.addEventListener("resize", toggleMenuIcon);
