import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
export const headerData = {
  links: [
    {
      text: '#nav.ticketSystem',
      href: 'https://uc.easecation.net/login',
    },
    {
      text: '#nav.wiki',
      href: 'https://wiki.easecation.net/%E9%A6%96%E9%A1%B5',
    },
    {
      text: '#nav.news',
      links: [
        {
          text: '#nav.commonBlog',
          enableLocalization: true,
          href: getPermalink('category/blog', 'post'),
        },
        {
          text: '#nav.chinaJoy',
          enableLocalization: true,
          href: getPermalink('category/chinajoy', 'post'),
        },
      ],
    },
    // 移除了语言菜单选项
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};
export const footerData = {
  links: [
    {
      title: '#nav.footer.website',
      links: [
        { text: 'EaseCation Wiki', href: 'https://wiki.easecation.net/' },
        { text: '#nav.footer.userCanter', href: 'https://uc.easecation.net/' },
        { text: "#nav.footer.generalGuide", href: "https://uc.easecation.net/general-guidelines" },
        { text: "#nav.footer.playerGuide", href: "https://uc.easecation.net/player-guidelines" },

      ],
    },
    {
      title: '#nav.footer.social',
      links: [
        { text: '#nav.footer.wechatOfficialAccount', href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NjQyNDE1Mw==' },
        { text: '#nav.footer.qChannel', href: 'https://pd.qq.com/s/fyin4tuq9' },
        { text: '#nav.footer.bili', href: 'https://space.bilibili.com/382198016' },
        { text: '#nav.footer.redNote', href: 'https://www.xiaohongshu.com/user/profile/683824fe000000001b0195d2' },
        { text: '#nav.footer.tiktok', href: 'https://www.douyin.com/user/MS4wLjABAAAA1Y2bQJJvvGC8cG78cI04qnPP78ygeFWn9qACeQ-LTLY' },
      ],
    }
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/EaseCation' },
    { ariaLabel: '合作邮箱', icon: 'tabler:mail', href: 'mailto:Junxuan.Bao@easecation.net' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/nb-esh/' },
  ],
  footNote: `©2025 宁波易什网络科技有限公司 版权所有<br>ICP备案/许可证号:
      <a class="hover:underline hover:cursor-pointer" target="_blank" href="https://beian.miit.gov.cn/">浙ICP备2022033471号-1</a>
  `
};
