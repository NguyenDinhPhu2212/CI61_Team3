import AnswerForm from "../Components/AnswerForm.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="writing-skill">
        <div class="container">
            <div class="header">
                <div class="numberLesson"></div>
                <div class="lessonName"></div>
                <div>Writing</div>
            </div>
            <div class="answerProgress">
                <div class="answerCompleted">
                </div>
            </div>
            <answer-form></answer-form>
            <button class="check-btn">Check</button>
        </div>
        <div class="message-box-container"><message-box></message-box></div>
    </div>
`;

export default class WritingSkill extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$numberLesson = this.querySelector(".numberLesson");
        this.$lessonName = this.querySelector(".lessonName");
        this.$checkBtn = this.querySelector(".check-btn");
        this.$all = 12;
        this.$progress = 0;
        this.$completed = this.querySelector(".answerCompleted");
        this.$messageBoxContainer = this.querySelector(
            ".message-box-container"
        );
        this.$messageBox = this.querySelector("message-box");
        this.indexQuestion = 0;
        this.$answerForm = this.querySelector("answer-form");
        this.correctAnswer = null;
    }
    static get observedAttributes() {
        return ["lesson", "completed", "all", "questions", "clicked"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "lesson") {
            console.log(newValue);
            let lesson = JSON.parse(newValue);
            this.$numberLesson.innerHTML = lesson.number;
            this.$lessonName.innerHTML = lesson.name;
        } else if (attrName == "completed") {
            this.$progress = parseInt(newValue) / this.$all;
            this.$completed.style.width = `${this.$progress * 100}%`;
        } else if (attrName == "all") {
            this.$all = parseInt(newValue);
        } else if (attrName == "questions") {
            this.questions = JSON.parse(this.getAttribute("questions"));
            this.$numberQuestion = this.indexQuestion + 1;
            this.$answerForm.setAttribute(
                "question",
                JSON.stringify(this.questions[this.indexQuestion])
            );
        } else if (attrName == "clicked") {
            this.$messageBoxContainer.style.display = "none";
            this.indexQuestion++;
            this.$answerForm.setAttribute(
                "question",
                JSON.stringify(this.questions[this.indexQuestion])
            );
        }
    }
    connectedCallback() {
        this.$checkBtn.onclick = (event) => {
            event.preventDefault();
            if (this.$answerForm.getCorrected()) {
                this.$messageBoxContainer.style.display = "block";
            }
        };
        this.$messageBoxContainer.onclick = (event) => {
            if (!this.$messageBox.isEqualNode(event.target)) {
                this.$messageBoxContainer.style.display = "none";
            }
        };
    }
}
window.customElements.define("write-skill", WritingSkill);
