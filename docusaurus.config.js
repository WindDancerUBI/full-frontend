// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Full-FrontEnd",
  tagline: "学习、研究、分享前端知识",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://winddancerubi.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/full-frontend/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "WindDancerUBI", // Usually your GitHub org/user name.
  projectName: "full-frontend", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/WindDancerUBI/full-frontend/blob/main/",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) => 
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  options: { wordsPerMinute: 300 },
                }),
          editUrl: "https://github.com/WindDancerUBI/full-frontend/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Full-FrontEnd",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "教程",
          },
          {
            type: "docSidebar",
            sidebarId: "actionSidebar",
            position: "left",
            label: "实战",
          },
          { to: "/blog", label: "博客", position: "left" },
          {
            href: "https://github.com/WindDancerUBI/full-frontend",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "教程",
                to: "/docs/tutorial/intro",
              },
              {
                label: "实战",
                to: "/docs/actions/intro",
              },
              {
                label: "博客",
                to: "/docs/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "官网",
                href: "https://www.winddancer.cn",
              },
              {
                label: "掘金",
                href: "https://juejin.cn/user/510590874301304",
              },
              {
                label: "哔哩哔哩",
                href: "https://space.bilibili.com/258103180",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/WindDancerUBI/full-frontend",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Full-FrontEnd, Build by WindDancer.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
