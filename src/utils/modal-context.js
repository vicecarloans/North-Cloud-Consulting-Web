import React from "react";

export const ModalContext = React.createContext({
    visible: false,
    loading: false,
    toggleModal: () => {}
})
