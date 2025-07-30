import type { Props as EcGridItemProps } from "~/components/widgets/EcGridItem.astro";
import newsImage1 from "~/assets/images/selectedNews_1.png"
import newsImage2 from "~/assets/images/selectedNews_2.jpg"
import newsImage3 from "~/assets/images/selectedNews_3.jpg"
const SelectedNews: EcGridItemProps[] = [
    { title: "公益活动:易什森林", desc: `你知道吗？全球46%的森林已被摧毁，而全球有1.6亿人依靠森林资源为生。 EaseCation和数亿玩家一起，推出公益玩法 易什森林 在全球种下数千颗树木。`, image: newsImage1 },
    { title: "新闻媒体:ChinaJoy新闻专区上线！", desc: "EaseCation 作为全国最大规模电子数码展会之一 ChinaJoy 的2020-2024年官方支持合作媒体现已推出ChinaJoy新闻专区第一时间发布相关资讯！", image: newsImage2,url:"/category/chinajoy",urlEng: "/en/category/chinajoy"},
    { title: "集团产品:全面升级易什集团", desc: "你知道吗？除了以EaseCation为首的网络游戏，易什集团下的另外两家家公司还提供包含中小型企业内部办公系统定制服务和AI相关业务，期待与您合作！", image: newsImage3 },
];
const SelectedNewsEnglish: EcGridItemProps[] = [
    { title: "Public Welfare:EastCation Forest", desc: `You know what? 46% of the world's forests have been destroyed, and 160 million people worldwide rely on forest resources for their livelihoods. EaseCation, along with hundreds of millions of players, launches a public welfare gameplay where EaseCation Forest plants thousands of trees worldwide.`, image: newsImage1 },
    { title: "ChinaJoy News Zone is online!", desc: "EaseCation, as one of the largest electronic and digital exhibitions in China, has officially supported ChinaJoy from 2020 to 2024. The cooperative media has launched the ChinaJoy news section to release relevant information as soon as possible!", image: newsImage2,url:"/category/chinajoy",urlEng: "/en/category/chinajoy"},
    { title: "Full upgrade to ESH GROUP!", desc: "Are you know？Apart from online games led by EaseCation，The other two companies under the ESH GROUP also provide customized office systems and AI related services for small and medium-sized enterprises. We look forward to working with you!", image: newsImage3 },
];
export {SelectedNews,SelectedNewsEnglish}