const animalData = {
    antelope: { image: "/images/antelope.jpg", name: "Antelope", pid: "ID: p01", discription: "3.6feet, 70Kg, 8year", price: "Rs. 3.2lakh" },
    dog: { image: "/images/dog.jpg", name: "Dog", pid: "ID: p02", discription: "4feet, 80Kg, 5year, German Shephard", price: "Rs. 20k" },
    dolphin: { image: "/images/dolphin.jpg", name: "Dolphin", pid: "ID: p03", discription: "4.2feet, 32Kg, 3year, Greyish Blue", price: "Rs. 6.3lakh" },
    eagle: { image: "/images/eagle.jpg", name: "Eagle", pid: "ID: p04", discription: "9inch, 4Kg, 7months, Red Eye", price: "Rs. 12k" },
    elephant: { image: "/images/elephant.jpg", name: "Elephant", pid: "ID: p05", discription: "10feet, 4023Kg, 32year, Perfect", price: "Rs. 30 lakh" },
    horse: { image: "/images/horse.jpg", name: "Horse", pid: "ID: p06", discription: "9feet, 300Kg, 7year, Frey", price: "Rs. 90k" },
    rabbit: { image: "/images/rabbit.jpg", name: "Rabbit", pid: "ID: p07", discription: "12inch, 3Kg, 5months, White Color Red Eye", price: "Rs. 2k" },
    raccoon: { image: "/images/raccoon.jpg", name: "Raccoon", pid: "ID: p08", discription: "1feet, 18KG, 4year, Australian", price: "Rs. 23k" },
    turtle: { image: "/images/turtle.jpg", name: "Turtle", pid: "ID: p09", discription: "18cm, 900gm, 10year, Curve Shell", price: "Rs. 2.5k" },
    wombat: { image: "/images/wombat.jpg", name: "Wombat", pid: "ID: p10", discription: "1.3feet, 23Kg, 8year, Brown", price: "Rs. 1.8 lakh" },
    woodpecker: { image: "/images/woodpecker.jpg", name: "Woodpecker", pid: "ID: p11", discription: "50cm, 2Kg, 2year, Southern", price: "Rs. 8k" },
    zebra: { image: "/images/zebra.jpg", name: "Zebra", pid: "ID: p12", discription: "7feet, 132Kg, 12year, Back Striped", price: "Rs. 12 lakh" }
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