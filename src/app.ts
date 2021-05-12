const container = document.getElementById("container");
const button = document.querySelector(".generate");
const colorPicker = <HTMLInputElement>document.querySelector("input[name='color']");
const spacing = <HTMLInputElement>document.querySelector("input[name='spacing']");

let backgroundColor = "#ff0000";
const defaultBackgroundColor = "#ffffff";

button?.addEventListener("click", generate);

colorPicker?.addEventListener("change", changeColor);

function generate(this: HTMLElement) {
    if (container) {
        container.innerText = "";
    }
    const cols = Number((<HTMLInputElement>document.querySelector("input[name='cols']")).value);
    const rows = Number((<HTMLInputElement>document.querySelector("input[name='rows']")).value);

    const table = <HTMLTableElement> document.createElement("table");

    if (spacing?.checked) {
        table.style.borderSpacing = "1px";
    } else {
        table.style.borderSpacing = "0";
    }

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
    const elementColorInHex = this.style.backgroundColor ? rgba2hex(this.style.backgroundColor) : null;
    
    if (elementColorInHex === backgroundColor) {
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

const rgba2hex = (rgba: any) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n: string, i: Number) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;