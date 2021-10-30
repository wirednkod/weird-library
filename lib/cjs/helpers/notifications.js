"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendNotification = function (store, notification) {
    store.addNotification({
        content: notification,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            pauseOnHover: true,
        },
    });
};
exports.default = sendNotification;
