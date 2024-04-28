/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "AI工具",
    sites: [
      {
        title: "ChatGPT代理",
        url: "https://chat.lify.vip/chat",
        icon: "",
        // color: "#0171CD",
      },
      {
        title: "Kimi大模型",
        url: "https://kimi.moonshot.cn/",
        icon: "",
        // color: "#0171CD",
      },
      {
        title: "讯飞星火公文助手",
        url: "https://gw.iflydocs.com/",
        icon: "",
        // color: "#0171CD",
      },
      {
        title: "笔灵AI写作",
        url: "https://ibiling.cn/",
        icon: "",
        // color: "#0171CD",
      }
    ],
  },
  {
    title: "编程手册",
  },
  {
    title: "数据治理",
  },
  {
    title: "实用资源",
  },
  // {
  //   title: "友情链接",
  //   sites: [
  //     {
  //       title: "EsunR Blog",
  //       description: "EsunR 的博客",
  //       url: "https://www.esunr.xyz",
  //       icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
  //     },
  //   ],
  // },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Plant-Trees",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://www.dodoai.cn/blog",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/Ji3jin",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "冀ICP备2024046320号-1",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    // "欢迎拜访",
    // "Welcome, my friend!",
    // "嗨，别来无恙",
    // "不忘初心，一生浪漫",
    // "最近还好吗？",
    // "流星，落花，萤火",
    // "马车越空，晃荡越响",
    "种一棵树最好的时间是十年前，其次是现在",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Data & AI Resource",
    keywords: "BigData, AI, Resource, Python, Java, Hadoop, Spark, Presto, 大数据, 数据治理, 数据管理, AI工具, 教程, 副业",
    description: "嘟嘟工具箱.",
  },
};

export default GLOBAL_CONFIG;
