import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import meditationSideBar from "./sidebars/meditationSideBar";
import homepageSideBar from "./sidebars/homepageSideBar";
import habitSideBar from "./sidebars/habitSideBar";
// @ts-ignore
export default {
    "/好习惯/": habitSideBar,
    "/学习路线/": roadmapSideBar,
    "/学习冥想/": meditationSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/":homepageSideBar,
} as SidebarConfig4Multiple;


