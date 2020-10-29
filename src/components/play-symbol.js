import { WritableComponent } from "../libs/writable-component.js";

/*Much like CurrentTurn, it shows the symbol that is playing now*/
export class PlaySymbol extends WritableComponent {
    constructor() {
        super("symbol");
        this.element.setAttribute("style", "float: right");
    }
    set textContent(v) {
        super.textContent = `playing: ${v}`;
    }
}