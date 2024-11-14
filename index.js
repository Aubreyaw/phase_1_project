const baseUrl = "https://www.thecolorapi.com/id?hex=24B1E0";

document.addEventListener("DOMContentLoaded", function() {
    function fetchColor() {
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Color Data", data);
            
        })
        .catch(error => console.error("Color fetch error:", error));
    }

    fetchColor();
});