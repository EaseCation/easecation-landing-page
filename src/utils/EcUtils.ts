import EcTranslate from "~/utils/EcTranslate";
class EcUtils {
    static getBlogUrl(href: string) {
        const currentLang = EcTranslate.getCurrentLang(href);
        if (currentLang === "zh") {
            return "/blog";
        } else {
            return '/en/blog';
        }
    }
    // 避免每次点击回到中文
    static getHomeUrl(href: string) {
        const currentLang = EcTranslate.getCurrentLang(href);
        if (currentLang === "zh") {
            return "/";
        } else {
            return '/en';
        }
    }
    static getExcerpt(content:string,length:number): string {
        const imageStopPoint = content.indexOf("![](") ?? 1000;
        let text: string;
        //处理开头图片
        if (imageStopPoint === 0) {
            const imageStartPoint = content.indexOf(")");
            const newImageStopPoint = content.indexOf("![](", imageStartPoint + 1);
            text = content.slice(imageStartPoint + 1, newImageStopPoint === -1 ? imageStartPoint + (length+1) : Math.min(newImageStopPoint, imageStartPoint + (length+1))) ?? "";
        } else {
            //正常情况
            text = content.slice(imageStopPoint === 0 ? content.indexOf(")") : 0, imageStopPoint === -1 ? length : Math.min(imageStopPoint, length)) ?? "";
        }
        text = text.replaceAll("**", "");
        return `${text}......`
    }
}
export default EcUtils;