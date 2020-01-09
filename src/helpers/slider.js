let isDown = false;
let startX;
let scrollLeft;

function holdSlider(e) {
    const sliderDiv = e.currentTarget;
    isDown = true;
    startX = e.pageX - sliderDiv.offsetLeft;
    scrollLeft = sliderDiv.scrollLeft;
}

function unholdSlider() {
    isDown = false;
}

function dragSlider(e) {
    const sliderDiv = e.currentTarget;
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderDiv.offsetLeft;
    const walk = (x - startX) * 1;
    sliderDiv.scrollLeft = scrollLeft - walk;
}

export { holdSlider, unholdSlider, dragSlider };
