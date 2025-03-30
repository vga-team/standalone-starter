export default class extends HTMLElement {
    obtainHeaderCallback = () => `Demo Plugin`;

    constructor() {
        super();
        const container = this.attachShadow({ mode: "open" });
       
        container.innerHTML = "Hello World!";
    }
}