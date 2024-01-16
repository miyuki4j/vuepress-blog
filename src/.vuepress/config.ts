import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress-blog/",

  lang: "zh-CN",
  title: "miyuki4jのblog",
  description: "vuepress-theme-hope 个人博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
