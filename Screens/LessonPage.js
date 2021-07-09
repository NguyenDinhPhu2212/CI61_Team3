import LearningProgress from "../Components/LearningProgress.js";
import LessonList from "../Components/LessonList.js";
import { LessonListData } from "../JS/data.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="lesson-page">
        <learning-progress></learning-progress>
        <lesson-list></lesson-list>
    </div>
`;

export default class LessonPage extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$lessonPage = this.querySelector(".lesson-page");
        this.$lessonProgress = this.querySelector("learning-progress");
        this.$lessonList = this.querySelector("lesson-list");
    }
    static get observedAttributes() {
        return ["all", "completed", "list"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "list") {
            this.$lessonList.setAttribute("list", newValue);
        } else if (attrName == "all") {
            this.$lessonProgress.setAttribute("all", newValue);
        } else if (attrName == "completed") {
            this.$lessonProgress.setAttribute("completed", newValue);
        }
    }
    connectedCallback() {
        
    }
}
window.customElements.define("lesson-page", LessonPage);
