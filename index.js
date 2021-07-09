import Lesson from "./Components/Lesson.js";
import SkillIcon from "./Components/SkillIcons.js";
import LearningProgress from "./Components/LearningProgress.js";
import LessonList from "./Components/LessonList.js";
import RadioBar from "./Components/AudioBar.js";
import Readings from "./Components/Readings.js";
import WritingSkill from "./Screens/WritingSkill.js";
import MessageBox from "./Components/MessageBox.js";
import LessonPage from "./Screens/LessonPage.js";
import ReadingSkill from "./Screens/ReadingSkill.js";
import "./router.js";
// console.log(document.querySelector("#intro #listen"))
// document.querySelector("#intro #listen").setAttribute("status","true")
import { LessonListData } from "./JS/data.js";
// let $app = document.querySelector("#app");
// $app.appendChild(lessonPage);
// console.log(lessonPage);
router.navigate("/lesson-page");
let lessonPage = document.querySelector("lesson-page");
lessonPage.setAttribute("all", 12);
lessonPage.setAttribute("completed", 6);
lessonPage.setAttribute("list", JSON.stringify(LessonListData));
