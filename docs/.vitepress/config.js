/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-15 09:21:08
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-17 09:09:36
 * @FilePath: \ny-utils-api\docs\.vitepress\config.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
module.exports = {
  title: "ny-utils API文档",
  description: "鼐云前端函数工具库 API 文档",
  base: "/ny",
  markdown: {
    theme: "material-palenight", // md主题
    lineNumbers: true, // md 加行号
  },
  lastUpdated: true, // 显示最近更新时间
  appearance: true, // 可以选择深浅主题

  // 主题配置
  themeConfig: {
    docFooter: {
      prev: "前一页",
      next: "下一页",
    },
    socialLinks: [
      //右上角图标和链接，icon 可用svg 配置
      {
        icon: "github",
        link: "https://github.com/wenreq/ny-utils",
      },
      { icon: "slack", link: "https://juejin.cn/post/7165060441075351560" },
    ],
    nav: [
      //右侧导航
      { text: "首页", link: "/" },
      { text: "项目简介", link: "/page/index", activeMatch: "/page/" },
      { text: "API 文档", link: "/doc/index", activeMatch: "/doc/" },
    ],
    // 侧边导航
    sidebar: [
      {
        text: "项目简介",
        items: [
          { text: "1. 为什么要写这个类库", link: "/page/why" },
          {
            text: "2. 一套代码对多环境的支持和 Rollup 的配置",
            link: "/page/types",
          },
          { text: "3. library 函数部分", link: "/page/files" },
          { text: "4. 一些后续工作的补充", link: "/page/after" },
        ],
      },
      {
        text: "API 文档",
        items: [
          { text: "Array", link: "/doc/Array" },
          { text: "Class", link: "/doc/Class" },
          { text: "Cookie", link: "/doc/Cookie" },
          { text: "Device", link: "/doc/Device" },
          { text: "Dom", link: "/doc/Dom" },
          { text: "Filter", link: "/doc/Filter" },
          { text: "Function", link: "/doc/Function" },
          { text: "Keycode", link: "/doc/Keycode" },
          { text: "Number", link: "/doc/Number" },
          { text: "Object", link: "/doc/Object" },
          { text: "Random", link: "/doc/Random" },
          { text: "Regexp", link: "/doc/Regexp" },
          { text: "Screen", link: "/doc/Screen" },
          { text: "Storage", link: "/doc/Storage" },
          { text: "String", link: "/doc/String" },
          { text: "Support", link: "/doc/Support" },
          { text: "Time", link: "/doc/Time" },
          { text: "Url", link: "/doc/Url" },
        ],
      },
    ],
    outlineTitle: "目录",
  },
};
