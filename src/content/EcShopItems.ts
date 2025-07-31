import type { Props as EcGridItemProps } from "~/components/widgets/EcGridItem.astro";
import shopImage1 from "~/assets/images/shopItem1.jpg"
import shopImage2 from "~/assets/images/shopItem2.jpg"
import shopImage3 from "~/assets/images/shopItem3.jpg"
import shopImage4 from "~/assets/images/shopItem4.jpg"
const ShopItems: EcGridItemProps[] = [
    { title: "炫彩镭射袋 EaseCation购物手提袋", desc: ``, image: shopImage1, url: "https://item.taobao.com/item.htm?id=693619899876", urlEng: "https://item.taobao.com/item.htm?id=693619899876" },
    { title: "蓝紫色E 钥匙扣", desc: "", image: shopImage2, url: "https://item.taobao.com/item.htm?id=692904942294", urlEng: "https://item.taobao.com/item.htm?id=692904942294" },
    { title: "卡通彭彭PY像素挂链钥匙扣", desc: "", image: shopImage3, url: "https://item.taobao.com/item.htm?id=720083452828", urlEng: "https://item.taobao.com/item.htm?id=720083452828" },
    { title: "彭彭系列勋章盲盒", desc: "", image: shopImage4, url: "https://item.taobao.com/item.htm?id=694380695984", urlEng: "https://item.taobao.com/item.htm?id=694380695984" }
];
const ShopItemsEnglish: EcGridItemProps[] = [
    { title: "EaseCation laser tote", desc: ``, image: shopImage1, url: "https://item.taobao.com/item.htm?id=693619899876", urlEng: "https://item.taobao.com/item.htm?id=693619899876" },
    { title: "Violet  keychain", desc: "", image: shopImage2, url: "https://item.taobao.com/item.htm?id=692904942294", urlEng: "https://item.taobao.com/item.htm?id=692904942294" },
    { title: "Cartoon PengYue keychain", desc: "", image: shopImage3, url: "https://item.taobao.com/item.htm?id=720083452828", urlEng: "https://item.taobao.com/item.htm?id=720083452828" },
    { title: "PengYue badge lottery", desc: "", image: shopImage4, url: "https://item.taobao.com/item.htm?id=694380695984", urlEng: "https://item.taobao.com/item.htm?id=694380695984" }
];
export { ShopItems, ShopItemsEnglish }