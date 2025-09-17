import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }, inject) => {
  app.AOS = new AOS.init({
    // disable: window.innerWidth < 640,
    offset: 200,
    duration: 600,
    easing: "ease-in-out-cubic",
    disable: true,
    once: false,
    mirror: false,
    debounceDelay: 50,
    throttleDelay: 99,
  }); // or any other options you need

  app.AOS = new AOS.refresh();
};
