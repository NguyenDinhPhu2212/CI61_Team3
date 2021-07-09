const $template = document.createElement("template");
$template.innerHTML = `
    <div class="readings">
        <div class="threads">Practice: please read the following passage
        </div>
        <div class="article">
        </div>
    </div>
`;

export default class Readings extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$article = this.querySelector(".article");
    }
    static get observedAttributes() {
        return ["content"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "content") {
            this.$article.innerHTML = newValue;
        }
    }
}
window.customElements.define("read-practice", Readings);
