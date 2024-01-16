import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "每日一记",
    icon: "pen-to-square",
    prefix: "/daily/",
    children: [
      {
        text: "2024-01-15",    
        icon: "pen-to-square",
        link: "2024-01-15"
      },
      {
        text: "2024-01-16",    
        icon: "pen-to-square",
        link: "2024-01-16"
      },
    ]
  },
  "/demo/",
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
