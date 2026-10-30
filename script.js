let brokenButton = document.getElementById("buttonNonExistentSite");
brokenButton.addEventListener("click", errorOnSiteButton);

function errorOnSiteButton() {
    if (navigator.userAgent.includes("Firefox")) {
        alert(`TypeError: URL constructor: 'NEM0NTU0NEQ0NTRGNTU1NA==' is not a valid URL.
                processData@http://localhost:3000/script.js:4:12
                onclick@http://localhost:3000/index.html:12:5
    Reloading site`);
    } else {
        alert(`TypeError: Failed to construct 'URL': Invalid URL
                 at processData (script.js:4:12)
                 at HTMLButtonElement.onclick (index.html:12:5)
        Reloading site`);
    }
    window.location.reload();
}
