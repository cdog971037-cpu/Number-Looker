let brokenButton = document.getElementById("buttonNonExistentSite");
brokenButton.addEventListener("click", brokenButton);

function brokenButton(){
    alert("TypeError: Failed to construct 'URL': Invalid URL\nReloading site");
}
