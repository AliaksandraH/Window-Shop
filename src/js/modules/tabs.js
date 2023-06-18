const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = "none";
        });

        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(id = 0) {
        content[id].style.display = "block";
        tab[id].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => {
        const target = e.target;
        if (
            target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(
                    tabSelector.replace(/\./, "")
                ))
        ) {
            tab.forEach((item, id) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent();
                    showTabContent(id);
                }
            });
        }
    });
};

export default tabs;
