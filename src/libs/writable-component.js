import { SimpleComponent } from "./simple-component.js";

/* A writable class holds an alias property to change the element's textContent and extends SimpleComponent */

export class WritableComponent extends SimpleComponent {
    constructor (selector) {
        super (selector);
    }
    /*get property sets the function as a getter, you can use as writableComponent.textContent */
    get textContent () {
        return this.element.textContent;
    }
    /*The setter makes it so that you can set it to a value, writableComponent.textContent = "some value" */
    set textContent (value) {
        return (this.element.textContent = value);
    }
}