function update() {
    const image = document.getElementById("image");

    const width = document.getElementById("width-input").value;
    const height = document.getElementById("height-input").value;
    const border = document.getElementById("border-input").value;
    const alt = document.getElementById("alt-input").value;

    if (width) image.width = width;
    if (height) image.height = height;
    if (border) image.border = border;
    if (alt) image.alt = alt;
}


function reset(){
    const image = document.getElementById("image");
    image.width = 500;
    image.height = 300;
    image.border = 10;
    image.alt = "Image";
    document.getElementById("width-input").value = 500;
    document.getElementById("height-input").value = 300;
    document.getElementById("border-input").value = 10;
    document.getElementById("alt-input").value = "Image";
}
