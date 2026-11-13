//this is for general functions for the entire webpage
function darkMode() {
    let elemLink = document.querySelector('link[rel~="icon"]');
    console.log(elemLink);
    if (!elemLink) {
        elemLink = document.createElement('link');
        elemLink.rel = 'icon';
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

            elemLink.href = 'faviconDark.ico';

        }
        else {
            elemLink.href = 'faviconLight.ico';
        }
        document.head.appendChild(elemLink);
    }
}
darkMode();
