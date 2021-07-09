const $template = document.createElement("template");
$template.innerHTML = `
    <div class="learning-progress">
        <div class="progress-container">
            <div>Now you are done:</div>
            <div class="progress-bar">
                <div class="progress">
                    <div class="completed"></div>
                </div>
                <div class="note"></div>
            </div>
            <div class="message"></div>
        </div>
        <img src="" class="image">
    </div>
`;

export default class LearningProgress extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$completed = this.querySelector(".completed");
        this.$all = 0;
        this.$progress = 0;
        this.$image = this.querySelector(".image");
        this.$message = this.querySelector(".message");
        this.$note = this.querySelector(".note");
    }
    static get observedAttributes() {
        return ["completed", "all"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "completed") {
            this.$note.innerHTML = newValue + this.$note.innerHTML;
            this.$progress = parseInt(newValue) / this.$all;
            this.$completed.style.width = `${this.$progress * 100}%`;
        } else if (attrName == "all") {
            this.$note.innerHTML += "/" + newValue;
            this.$all = parseInt(newValue);
        }
    }
    connectedCallback() {
        if (this.$progress < 1) {
            this.$image.src =
                "https://image.freepik.com/free-vector/young-woman-standing-front-mirror-motivate-confident-you-can-it-vector-illustration_10045-633.jpg";
            this.$message.innerHTML = "Try up! Your efforts will pay off!";
        } else if (this.$progress == 1) {
            this.$image.src =
                "https://image.freepik.com/free-vector/team-happy-employees-winning-award-celebrating-success-business-people-enjoying-victory-getting-gold-cup-trophy-vector-illustration-reward-prize-champions-s_74855-8601.jpg";
            this.$message.innerHTML =
                "Congratulation! You have completed the course!";
        }
    }
}
window.customElements.define("learning-progress", LearningProgress);
