const baseUrl = "https://www.thecolorapi.com/id?hex=24B1E0";

document.addEventListener("DOMContentLoaded", function() {
    function fetchColor() {
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Color Data", data);
            const colors = data
            const colorDiv = document.getElementById("color-div");

            const colorName = document.createElement("p");
            colorName.textContent = colors.name.value || "Unknown Color"
            colorDiv.appendChild(colorName);

            colorHex = document.createElement("p")
            colorHex.textContent = colors.hex.value;
            colorDiv.appendChild(colorHex);

            const colorImage = document.createElement('img');
            colorImage.src = colors.image.named;
            colorDiv.appendChild(colorImage)

            const hexForm = document.createElement("form");
            hexForm.id = "hex-form";
            colorDiv.appendChild(hexForm);

            const hexInput = document.createElement("input");
            hexInput.type = "text";
            hexInput.id = "hex-input";
            hexInput.placeholder = "Enter HEX Code"
            hexForm.appendChild(hexInput);
        })
        .catch(error => console.error("Color fetch error:", error));
    }

    fetchColor();
});