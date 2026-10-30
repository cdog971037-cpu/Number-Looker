let brokenButton = document.getElementById("button");
brokenButton.addEventListener("click", brokenButton);

function brokenButton(){
    alert("TypeError: Failed to construct 'URL': Invalid URL\nReloading site");
}
