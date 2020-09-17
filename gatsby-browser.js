import "./src/theme/global.css";

// in gastby-browser.js
export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {

    window.scrollTo({top: 0, behavior: "smooth"})

    return false
};
