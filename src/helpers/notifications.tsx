const sendNotification = (store: any, notification: React.ReactElement) => {
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
export default sendNotification;
