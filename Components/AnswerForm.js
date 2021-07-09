const $template = document.createElement("template");
$template.innerHTML = `
            <div class="questionContainer">
                <div class="threads">
                Please write your answer in the field below.
                </div>
                <div class="question">
                    Question <span class="numberQuestion"></span>: <span class="questionContent"></span>
                </div>
                <form class="answerForm">
                    <input type="text" name="answer" id="answer" class="answer">
                </div>
            </div>
`;

export default class AnswerForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$numberQuestion = this.querySelector(".numberQuestion");
        this.$questionContent = this.querySelector(".questionContent");

        this.$answerForm = this.querySelector(".answerForm");
        this.correctAnswer = null;
    }
    static get observedAttributes() {
        return ["question"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "question") {
            newValue = JSON.parse(newValue);
            this.$numberQuestion.innerHTML = newValue.number;
            this.$questionContent.innerHTML = newValue.question;
            this.correctAnswer = newValue.answer;
            this.$answerForm.answer.value = ""
        }
    }
    connectedCallback() {}
    getCorrected() {
        const answer = this.$answerForm.answer.value;
        if(answer){
            if (answer.toLowerCase() == this.correctAnswer.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}
window.customElements.define("answer-form", AnswerForm);
