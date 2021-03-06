import { ListComponent } from "../libs/list-component.js";
import { GameRow } from "./game-row.js";
/*GameField is responsible for creating the actual elements of the game.
We do this by iterating over the provided field from GameEngine and 
creating a row and its columns with GameRow and GameSlot*/
export class GameField extends ListComponent {
    constructor (field) {
        super ("game-field");
        let gameRow;
        this.items = [];
        this.element.setAttribute(
            "style",
            "font-family: Monospace; text-align: center"
        );
        field.forEach(row => {
            gameRow = new GameRow(row);
            this.element.appendChild(gameRow.element);
            this.items.push(gameRow);
        });
    }
}