import SkillIcon from "./SkillIcons.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="lesson">
        <div class="numerical">
        </div>
        <div class="lesson-title">
            <div>
            Lesson <span class="lesson-number"></span>: <span class="lesson-name"></span>
            </div>
            <img src="" class="lesson-image">
        </div>
        <div class="skills">
            <skill-icon status="false" id="listen"
                background="https://image.freepik.com/free-vector/headphone-concept-illustration_114360-2222.jpg"> 
                </skill-icon>
            <skill-icon status="false" id="speak" 
                background="https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg"> 
                </skill-icon>
            <skill-icon status="false" id="read"
                background="https://image.freepik.com/free-vector/flat-design-world-book-day-concept_52683-35711.jpg"> 
                </skill-icon>
            <skill-icon status="false" id="write"
                background="https://image.freepik.com/free-vector/closeup-fountain-pen-writing-signature-realistic_1284-13522.jpg"> 
                </skill-icon>
        </div>
    </div>
`;

export default class Lesson extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$lessonImage = this.querySelector(".lesson-image");
        this.$lessonNumber = this.querySelector(".lesson-number");
        this.$lessonName = this.querySelector(".lesson-name");
        this.$numerical = this.querySelector(".numerical");
    }
    static get observedAttributes() {
        return ["lesson"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "lesson") {
            newValue = JSON.parse(newValue);
            this.setAttribute("id", newValue.id);
            this.$lessonNumber.innerHTML = newValue.number;
            this.$numerical.innerHTML = newValue.number;
            this.$lessonName.innerHTML = newValue.name;
            this.$lessonImage.src = newValue.background;
        }
    }
}
window.customElements.define("lesson-intro", Lesson);
