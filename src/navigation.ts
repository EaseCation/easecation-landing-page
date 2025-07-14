import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '新闻',
      links: [
        {
          text: '最新',
          href: getBlogPermalink(),
        },
        {
          text: 'China Joy专区',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
      ],
    }
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '官方网站',
      links: [
        { text: 'EaseCationWiki', href: 'https://wiki.easecation.net/' },
        { text: '用户中心', href: 'https://uc.easecation.net/' }
      ],
    },
    {
      title: '官方社媒',
      links: [
        { text: '公众号', href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NjQyNDE1Mw==' },
        { text: 'QQ频道', href: 'https://pd.qq.com/s/fyin4tuq9'},
        { text: '哔哩哔哩', href: 'https://space.bilibili.com/382198016' },
        { text: '小红书', href: 'https://www.xiaohongshu.com/user/profile/683824fe000000001b0195d2' },
        { text: '抖音', href: 'https://www.douyin.com/user/MS4wLjABAAAA1Y2bQJJvvGC8cG78cI04qnPP78ygeFWn9qACeQ-LTLY' },
      ],
    }
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/EaseCation' },
    { ariaLabel: '合作邮箱', icon: 'tabler:mail', href: 'mailto:Junxuan.Bao@easecation.net' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/nb-esh/' },
  ],
  footNote:`©2025 宁波易什网络科技有限公司 版权所有<br>ICP备案/许可证号:
      <a class="hover:underline hover:cursor-pointer" target="_blank" href="https://beian.miit.gov.cn/">浙ICP备2022033471号-1</a>
  `
};
