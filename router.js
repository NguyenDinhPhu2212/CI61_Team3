import LessonPage from "./Screens/LessonPage.js";
import { LessonListData } from "./JS/data.js";
var root = null;
var useHash = true; // Defaults to: false
var hash = "#"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
    .on("/lesson-page", function () {
        document.getElementById("app").innerHTML =
            "<lesson-page></lesson-page>";
    })
    .resolve();
router
    .on("/write", function () {
        document.getElementById("app").innerHTML =
            "<write-skill></write-skill>";
    })
    .resolve();
router
    .on("/read", function () {
        document.getElementById("app").innerHTML =
            "<read-skill></read-skill>";
    })
    .resolve();
window.router = router;
