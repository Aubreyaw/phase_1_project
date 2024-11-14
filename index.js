const baseUrl = "https://www.thecolorapi.com/id?hex=24B1E0";

document.addEventListener("DOMContentLoaded", function() {
    function fetchColor() { // PROJECT //
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Color Data", data);
            const colors = data
            const colorDiv = document.getElementById("color-div");
            
            const colorImage = document.createElement('img');
            colorImage.src = colors.image.bare;
            colorDiv.appendChild(colorImage)

            const colorName = document.createElement("p");
            colorName.textContent = colors.name.value || "Unknown Color"
            colorDiv.appendChild(colorName);

            colorHex = document.createElement("p")
            colorHex.textContent = colors.hex.value;
            colorDiv.appendChild(colorHex);

            const hexForm = document.createElement("form");
            hexForm.id = "hex-form";
            colorDiv.appendChild(hexForm);

            const hexInput = document.createElement("input");
            hexInput.type = "text";
            hexInput.id = "hex-input";
            hexInput.placeholder = "Enter HEX Code"
            hexForm.appendChild(hexInput);

            const submitButton = document.createElement("button");
            submitButton.type = ("submit");
            submitButton.textContent = ("Submit");
            hexForm.appendChild(submitButton);

            hexForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const input = hexInput.value;
                console.log(input);

                hexForm.reset();
            })


        })
        .catch(error => console.error("Color fetch error:", error));
    }

    fetchColor();
});