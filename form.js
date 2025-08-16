document.getElementById("myForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("input_name").value,
        email: document.getElementById("input_email").value,
        phone: document.getElementById("input_phone").value,
        address: document.getElementById("input_address").value,
        product: document.getElementById("input_product").value
    };

    await fetch("/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    alert("Saved to database!");
});
