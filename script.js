let brokenButton = document.getElementById("buttonNonExistentSite");
brokenButton.addEventListener("click", errorOnSiteButton);

function errorOnSiteButton(){
    alert("TypeError: Failed to construct 'URL': Invalid URL\nReloading site");
}
