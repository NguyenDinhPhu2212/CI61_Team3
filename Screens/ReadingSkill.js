import Readings from "../Components/Readings.js";
import Vocabulary from "../Components/Vocabulary.js";
import { Dictionary } from "../JS/data.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="reading-skill">
        <div>
            <div class="header">
                <div class="numberLesson">1</div>
                <div class="lessonName">Introduction</div>
            <div>Read</div>
            </div>
            <word-list></word-list>
            <read-practice
                    content="Random Passage is a 1992 novel by Newfoundland author Bernice Morgan. It was published by Breakwater Books Ltd. of St. John's, NL. It was followed by a sequel, Waiting for Time.

                        It is a historical novel about the inhabitants of Cape Random, a small outport where survival was dependent on catching and selling fish in exchange for supplies. It is set in colonial Newfoundland, over the span of many years.
                        
                        > <p>aaaaaaa</p>"
                ></read-practice>
                <read-practice
                content="Random Passage is a 1992 novel by Newfoundland author Bernice Morgan. It was published by Breakwater Books Ltd. of St. John's, NL. It was followed by a sequel, Waiting for Time.

                    It is a historical novel about the inhabitants of Cape Random, a small outport where survival was dependent on catching and selling fish in exchange for supplies. It is set in colonial Newfoundland, over the span of many years.
                    
                    > <p>aaaaaaa</p>"
            ></read-practice>
            <read-practice
                    content="Random Passage is a 1992 novel by Newfoundland author Bernice Morgan. It was published by Breakwater Books Ltd. of St. John's, NL. It was followed by a sequel, Waiting for Time.

                        It is a historical novel about the inhabitants of Cape Random, a small outport where survival was dependent on catching and selling fish in exchange for supplies. It is set in colonial Newfoundland, over the span of many years.
                        
                        > <p>aaaaaaa</p>"
                ></read-practice>
            <div class="done-btn">Done</div>  
        </div>
    </div>
`;

export default class ReadingSkill extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$vocabulary = this.querySelector("word-list");
        this.$doneBtn = this.querySelector(".done-btn");
    }
    static get observedAttributes() {
        return ["content"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "content") {
        }
    }
    connectedCallback() {
        this.$vocabulary.setAttribute("vocabulary", JSON.stringify(Dictionary));
        this.$doneBtn.onclick = () => {
            router.navigate("/lesson-page");
            let lessonPage = document.querySelector("lesson-page");
            lessonPage.setAttribute("all", 12);
            lessonPage.setAttribute("completed", 6);
            lessonPage.setAttribute("list", JSON.stringify(LessonListData));
        };
    }
}
window.customElements.define("read-skill", ReadingSkill);
