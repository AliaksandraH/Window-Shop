import scrollCalc from "./scrollCalc";

const modals = () => {
    function dindModal(
        triggerSelector,
        modalSelector,
        closeSelector,
        closeClickOverlay = true
    ) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll("[data-modal]"),
            scroll = scrollCalc();

        trigger.forEach((item) => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach((item) => {
                    item.style.display = "none";
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener("click", () => {
            windows.forEach((item) => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = "0px";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach((item) => {
                    item.style.display = "none";
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = "0px";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scrollCalc()}px`;
        }, time);
    }

    dindModal(
        ".popup_engineer_btn",
        ".popup_engineer",
        ".popup_engineer .popup_close"
    );
    dindModal(".phone_link", ".popup", ".popup .popup_close");
    dindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    dindModal(
        ".popup_calc_button",
        ".popup_calc_profile",
        ".popup_calc_profile_close",
        false
    );
    dindModal(
        ".popup_calc_profile_button",
        ".popup_calc_end",
        ".popup_calc_end_close",
        false
    );
    showModalByTime(".popup", 60000);
};

export default modals;
