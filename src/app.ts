const container = document.getElementById("container");
const button = document.querySelector(".generate");
const colorPicker = <HTMLInputElement>document.querySelector("input[name='color']");

let backgroundColor = "rgb(255, 0, 0)";
const defaultBackgroundColor = "rgb(255, 255, 255)";

button?.addEventListener("click", generate);

colorPicker?.addEventListener("change", changeColor);

function generate(this: HTMLElement) {
    if (container) {
        container.innerText = "";
    }
    const cols = Number((<HTMLInputElement>document.querySelector("input[name='cols']")).value);
    const rows = Number((<HTMLInputElement>document.querySelector("input[name='rows']")).value);

    const table = <HTMLTableElement> document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let tr = <HTMLTableRowElement> document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = <HTMLTableCellElement> document.createElement("td");
            td.style.cursor = "pointer";
            td.style.width = "30px";
            td.style.height = "30px";
            td.style.border = "1px solid black"
            td.addEventListener("click", colorCell);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    container?.appendChild(table);
}

function colorCell(this: HTMLTableCellElement) {
    console.log(this.style.backgroundColor, backgroundColor);
    
    if (this.style.backgroundColor === backgroundColor) {
        this.style.backgroundColor = defaultBackgroundColor;
    } else {
        this.style.backgroundColor = backgroundColor;
    }

    this.setAttribute("type","text");
    this.setAttribute("type","color");
}

function changeColor(this: HTMLInputElement) {
    backgroundColor = this.value;
}
