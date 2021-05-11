const button = document.querySelector(".generate")
button?.addEventListener("click", generate);

function generate(this: HTMLElement) {
    const widthInput = <HTMLInputElement>document.querySelector(".width");
    console.log("Clicked!");
    console.log(widthInput.value);
}