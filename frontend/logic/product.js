const animalData = {
    cargo: { image: "/images/cargo.avif", name: "Cargo", pid: "ID: p01", discription: "Black wide fit cotton cargo", price: "3000" },
    coat: { image: "/images/coat.avif", name: "Coat", pid: "ID: p02", discription: "Black full length woolen coat", price: "6000" },
    hoodie: { image: "/images/hoodie.avif", name: "Hoodie", pid: "ID: p03", discription: "Black heavy weight oversize woolen hoodie", price: "1800" },
    jeans: { image: "/images/jeans.avif", name: "Jeans", pid: "ID: p04", discription: "Black washed cotton jeans", price: "4000" },
    polo: { image: "/images/polo.avif", name: "Polo Tshirt", pid: "ID: p05", discription: "Black regular cotton polo tshirt", price: "1200" },
    shirt: { image: "/images/shirt.avif", name: "Shirt", pid: "ID: p06", discription: "Black regular cotton shirt", price: "1000" },
    sweater: { image: "/images/sweater.avif", name: "Sweater", pid: "ID: p07", discription: "Black oversize woolen sweater", price: "3500" },
    tshirt: { image: "/images/tshirt.avif", name: "Round Neck Tshirt", pid: "ID: p08", discription: "Black oversize round neck tshirt", price: "900" },
    windbreaker: { image: "/images/windbreaker.avif", name: "Windbreaker", pid: "ID: p09", discription: "Black regular polyster windbreaker", price: "4500" },
};

const params = new URLSearchParams(window.location.search);
const animal = params.get("animal");

if (animalData[animal]) {
    document.getElementById("product-image").src = animalData[animal].image;
    document.getElementById("product-name").textContent = animalData[animal].name;
    document.getElementById("product-id").textContent = animalData[animal].pid;
    document.getElementById("product-discription").textContent = animalData[animal].discription;
    document.getElementById("product-price").textContent = animalData[animal].price;
} else {
    document.getElementById("product-image").style.display = "none";
    document.getElementById("product-name").textContent = "NA";
    document.getElementById("product-id").textContent = "NA";
    document.getElementById("product-discription").textContent = "NA";
    document.getElementById("product-price").textContent = "NA";
}

// add item to cart logic
function addToCart() {
    const product = {
        id: animalData[animal].pid,
        name: animalData[animal].name,
        price: animalData[animal].price,
        discription: animalData[animal].discription
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}