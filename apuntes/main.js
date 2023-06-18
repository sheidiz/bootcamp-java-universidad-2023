document.querySelectorAll(".carousel").forEach(carousel=>{
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items,()=>{
        return `<span class="carousel__button"></span>`;
    });
    
    carousel.insertAdjacentHTML("beforeend",`
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `);
    console.log(buttonsHtml);
});