import Lesson from "./Lesson.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="lesson-list">
        
    </div>
`;

export default class LessonList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$lessonList = this.querySelector(".lesson-list");
    }
    static get observedAttributes() {
        return ["list"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "list") {
            let lessonList = JSON.parse(newValue);
            console.log(lessonList);
            for (let lesson of lessonList) {
                let lessonIntro = new Lesson();
                lessonIntro.setAttribute("lesson", JSON.stringify(lesson));
                this.$lessonList.appendChild(lessonIntro);
            }
        }
    }
}
window.customElements.define("lesson-list", LessonList);
