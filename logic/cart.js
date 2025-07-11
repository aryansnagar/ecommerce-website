function loadCart() {
    const cartContainer = document.getElementById("cart-items-container");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>ID: ${item.id}</p>
          <p>Price: ${item.price}</p>
          <button onclick="deleteItem(${index})">Delete</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;