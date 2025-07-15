const translations: Record<string, Record<string, string>> = {
    en: {
        '#nav.news': 'News',
        '#nav.latest': 'Latest',
        '#nav.chinaJoy': 'China Joy',
        '#nav.language': 'Language',
        "#nav.footer.website": 'Website',
        "#nav.footer.userCanter": 'User Center',
        "#nav.footer.social": 'Social Media',
        "#nav.footer.wechatOfficialAccount": 'WeChat Official Account',
        "#nav.footer.qChannel": 'QQ Channel',
        "#nav.footer.bili": 'Bilibili',
        "#nav.footer.redNote": 'Red Note',
        "#nav.footer.tiktok": 'TikTok',
        "#nav.footer.ecTitle": 'EaseCation:Minecraft Server',
    },
    zh: {
        '#nav.news': '新闻',
        '#nav.latest': '最新动态',
        '#nav.chinaJoy': 'China Joy专区',
        '#nav.language': '语言',
        "#nav.footer.website": '官方网站',
        "#nav.footer.userCanter":"用户中心",
        "#nav.footer.social": '官方社媒',
        "#nav.footer.wechatOfficialAccount": '微信公众号',
        "#nav.footer.qChannel": 'QQ频道',
        "#nav.footer.bili": '哔哩哔哩',
        "#nav.footer.redNote": '小红书',
        "#nav.footer.tiktok": '抖音',
        "#nav.footer.ecTitle":"EaseCation 小游戏服务器"

    },
};
type SupportedLang = 'en' | 'zh';
class EcTranslate {
    static getTranslate(key: string|undefined, lang: string,defaultValue?:string) {
        if (!key?.startsWith("#")) {
            return key??"Error";
        }
        return translations[lang]?.[key] ||defaultValue|| key;
    }
    static getCurrentLang(href:string): SupportedLang {
        href=href.replaceAll("://","")
        const firstSearchIndex=href.indexOf("/");
        //默认中文
        if (firstSearchIndex===-1) return "zh";
        const lastSearchIndex=href.indexOf("/",firstSearchIndex+1);
        const langString=href.slice(firstSearchIndex,lastSearchIndex===-1?href.length:lastSearchIndex);
        //先这样了 目前就两个语言
        if (langString.includes("en")) {
            return "en";
        }
        return "zh"
    }
    static getLocalHref(currentHref:string,targetHref:string,lang:string) {
        if (lang==="zh") {
            return targetHref;
        } else if (lang==="en") {
            return "/en"+targetHref
        }
        return targetHref;
    }
}
export default EcTranslate;