import "../router.js";
import WritingSkill from "../Screens/WritingSkill.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="skill-icon">
        <img src="" class="skill-image">
        <div class="complete">
        <i class="fal fa-check"></i>
        </div>
    </div>
`;

export default class SkillIcon extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$skillIcon = this.querySelector(".skill-icon");
        this.$skillImage = this.querySelector(".skill-image");
        this.$complete = this.querySelector(".complete");
    }
    static get observedAttributes() {
        return ["status", "background"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "status") {
            if (newValue == "true") {
                this.$complete.style.display = "";
                this.$skillImage.style.opacity = "0.4";
                this.$skillImage.style.filter = "grayscale(100%)";
                this.$complete.style.opacity = "1";
            } else if (newValue == "false")
                this.$complete.style.display = "none";
        } else if (attrName == "background") {
            this.$skillImage.src = newValue;
        }
    }
    connectedCallback() {
        this.$skillIcon.onmouseenter = () => {
            this.$skillIcon.style.boxShadow =
                "3px 4px 4px 2px rgb(150,150,150)";
        };
        this.$skillIcon.onmouseleave = () => {
            this.$skillIcon.style.boxShadow = "none";
        };
        this.$skillIcon.onclick = () => {
            let lesson =
                this.$skillIcon.parentNode.parentNode.parentNode.parentNode.getAttribute(
                    "lesson"
                );
            let iconId = this.$skillIcon.parentNode.getAttribute("id");
            if (iconId == "write") {
                router.navigate("/write");
                setTimeout(function(){
                    let writePage = document.querySelector("write-skill");
                    writePage.setAttribute("lesson", lesson);
                },0)
            }else if (iconId == "read") {
                router.navigate("/read");
                setTimeout(function(){
                    
                },0)
            }
        };
    }
}
window.customElements.define("skill-icon", SkillIcon);
