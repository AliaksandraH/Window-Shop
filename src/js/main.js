import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
    ("use strict");
    let modalState = {
        forms: 0,
        width: 0,
        height: 0,
        type: "tree",
        profile: "cold",
    };

    changeModalState(modalState);
    modals(modalState);
    forms(modalState);
    images();
    timer(".container1", "2025-07-01");
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(
        ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click"
    );
    tabs(
        ".balcon_icons",
        ".balcon_icons_img",
        ".big_img > img",
        "do_image_more",
        "inline-block"
    );
});
