// State

let cart = [];
let products = [];
let currentProduct = null;

//Navigation

function navigateTo(page, productId = null) {
  let allpages = document.querySelectorAll(".page");
  allpages.forEach((onepage) => onepage.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

navigateTo("home");

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) throw new Error("Failed to fetch products");

    products = await response.json();
    renderProduct();
    console.log(products);
  } catch (err) {
    console.log(err);
  }
}

function renderProduct() {
  const container = document.getElementById("products-container");
  container.innerHTML = products
    .map(
      (product) => `
  <div class='product-card'>
    <img src='${product.image}' alt='${product.title}' >  
    <h3>${product.title}</h3>
    <p>₹ ${product.price} </p>
  </div>`
    )
    .join(" ");
}

fetchProducts();
