import { timeUpdate } from "../JS/utils.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div class="radio-bar">
        <div class="playpause-track">
            <i class="fa fa-play-circle fa-3x"></i>
        </div>
        <div class="slider_container">
            <div class="current-time">00:00</div>
            <input type="range" min="1" max="100" value="0" class="slider">
            <div class="total-duration">00:00</div>
        </div>
    </div>
`;

export default class RadioBar extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$currentTrack = document.createElement("audio");
        this.$source = document.createElement("source");
        this.$playPause_Btn = this.querySelector(".playpause-track");
        this.$slider = this.querySelector(".slider");
        this.$currentTime = this.querySelector(".current-time");
        this.$totalDuration = this.querySelector(".total-duration");
        this.isPlaying = false;
    }
    async connectedCallback() {
        this.$source.src =
            "../audio/DungDuaVoiLuaThienThanHoMenhOst-LenaLena-7012398.mp3";
        this.$source.type = "audio/mpeg";
        this.$currentTrack.appendChild(this.$source);
        this.$currentTrack.controls = true;
        this.$currentTrack.load();
        this.$currentTrack.addEventListener("loadedmetadata", () => {
            console.log(this.$currentTrack.duration);
            // setInterval(
            //     timeUpdate(
            //         this.$currentTrack,
            //         this.$currentTime,
            //         this.$totalDuration,
            //         this.$slider
            //     ),
            //     1000
            // );
        });
        console.log(this.$currentTrack.duration);
        this.$playPause_Btn.onclick = () => {
            if (this.isPlaying) {
                this.$currentTrack.pause();
                this.isPlaying = false;
                this.$playPause_Btn.innerHTML =
                    '<i class="fa fa-play-circle fa-3x"></i>';
            } else {
                this.$currentTrack.play();
                this.isPlaying = true;
                this.$playPause_Btn.innerHTML =
                    '<i class="fa fa-pause-circle fa-3x"></i>';
            }
        };
        this.$slider.onchange = () => {
            this.$currentTrack.currentTime =
                this.$currentTrack.duration * (this.$slider.value / 100);
            console.log(this.$currentTrack.currentTime);
        };
        this.$currentTrack.addEventListener("ended", () => {
            this.$slider.value = "0";
            this.$currentTime.innerHTML = "00:00";
            this.$playPause_Btn.innerHTML =
                '<i class="fa fa-play-circle fa-3x"></i>';
            this.$currentTrack.load();
        });
    }
}
window.customElements.define("audio-bar", RadioBar);
