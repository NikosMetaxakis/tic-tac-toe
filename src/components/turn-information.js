import { SimpleComponent } from "../libs/simple-component.js";
import { PlaySymbol } from "./play-symbol.js";
import { CurrentTurn } from "./current-turn.js";

/*TurnInformation is the class that wraps CurrentTurn and Symbol 
into a whole component. It's not a extension of ListComponent
because we don't need to grab props by index and we can safely 
name them to access them normally*/
export class TurnInformation extends SimpleComponent {
    constructor() {
        super("turn-information");
        this.currentTurn = new CurrentTurn();
        this.symbol = new PlaySymbol();
        this.element.setAttribute(
            "style",
            "text-transform: uppercase; font-size: 30px; height: 40px;" +
                "display: block; font-family: Monospace"
        );

        this.element.appendChild(this.currentTurn.element);
        this.element.appendChild(this.symbol.element);
    }

    /*An alias that updates both components*/
    update(turn, symbol) {
        this.currentTurn.textContent = turn || 0;
        this.symbol.textContent = symbol || "";
    }
}