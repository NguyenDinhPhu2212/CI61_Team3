const $template = document.createElement("template");
$template.innerHTML = `
    <div class="vocabulary">
        <h3>Vocabulary</h3>
        <div class="container">
        </div>   
    </div>
`;

export default class Vocabulary extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$vocabulary = this.querySelector(".vocabulary");
        this.$container = this.querySelector(".container");
    }
    static get observedAttributes() {
        return ["vocabulary"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "vocabulary") {
            let vocabulary = JSON.parse(newValue);
            for (let value of vocabulary) {
                let newElement = document.createElement("div");
                newElement.innerHTML = `<span>${value.word}</span>: <span>${value.meaning}</span>`;

                this.$container.appendChild(newElement);
            }
        }
    }
}
window.customElements.define("word-list", Vocabulary);
