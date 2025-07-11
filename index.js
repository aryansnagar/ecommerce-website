document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const images = document.querySelectorAll("#index-container img");

    images.forEach(img => {
        const name = img.src.toLowerCase();
        if (name.includes(query)) {
            img.style.display = "inline-block";
        } else {
            img.style.display = "none";
        }
    });
});