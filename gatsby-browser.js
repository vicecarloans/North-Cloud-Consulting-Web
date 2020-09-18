import "./src/theme/global.css";

// in gastby-browser.js
export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    const { pathname } = location;
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/`];
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return false;
};
