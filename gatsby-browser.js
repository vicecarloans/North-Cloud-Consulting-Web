import "./src/theme/global.css";

// in gastby-browser.js
export const shouldUpdateScroll = ({
    routerProps: { location }
}) => {
    const { pathname } = location;
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/`];
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return false;
};

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 500)
}