import EcTranslate from "~/utils/EcTranslate";
class EcUtils{
    static getBlogUrl(href:string){
        const currentLang= EcTranslate.getCurrentLang(href);
        if (currentLang==="zh") {
            return "/blog";
        }else{
            return '/en/blog';
        }
    }
    // 避免每次点击回到中文
    static getHomeUrl(href:string){
        const currentLang= EcTranslate.getCurrentLang(href);
        if (currentLang==="zh") {
            return "/";
        }else{
            return '/en';
        }
    }
}
export default EcUtils;