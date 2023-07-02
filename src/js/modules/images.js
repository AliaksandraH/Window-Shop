import scrollCalc from "./scrollCalc";

const images = () => {
    const imgPopup = document.createElement("div"),
        workSection = document.querySelector(".works"),
        bigImg = document.createElement("img"),
        scroll = scrollCalc();

    imgPopup.classList.add("popup_img");
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImg);

    workSection.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains("preview")) {
            imgPopup.style.display = "flex";
            const path = target.parentNode.getAttribute("href");
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
            bigImg.setAttribute("src", path);
            bigImg.classList.add("image_big");
        }
        if (target && target.matches("div.popup_img")) {
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = "0px";
        }
    });
};

export default images;
