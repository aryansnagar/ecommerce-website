document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cart_03");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("input_name").value,
            email: document.getElementById("input_email").value,
            phone: document.getElementById("input_phone").value,
            address: document.getElementById("input_address").value,
            product: document.getElementById("input_product").value,
            price: document.getElementById("input_price").value
        };

        try {
            // Send to your local Node.js server
            const response = await fetch("https://magical-amoeba-rarely.ngrok-free.app/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.text();
                alert("✅ " + result);
                form.reset();
            } else {
                alert("❌ Failed to save data (server error).");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("❌ Could not connect to backend. Is server.js running?");
        }
    });
});
