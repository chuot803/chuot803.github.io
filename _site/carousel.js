document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-btn nes-pointer"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
        ${buttonsHtml.join("")}
    </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel-btn");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //unselect all items
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-btn-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-btn-selected");

            document.getElementById('target').textContent = `Week #${i + 1}`;
        });
    });

    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-btn-selected");
    document.getElementById('target').textContent = `Week #1`;
});