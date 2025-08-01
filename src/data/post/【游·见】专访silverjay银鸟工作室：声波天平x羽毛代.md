---
title: "【游·见】专访Silverjay银鸟工作室：声波天平×羽毛代码的碰撞中，以重构理性本能边界实现解谜新范式"
publishDate: 2025-07-01
category: chinajoy
author: 莱尔
---

“游·见”是ChinaJoy与Game Connection联合推出的游戏人专访栏目，我们将聚焦在游戏开发者、发行商、游戏产品上，讲述游戏背后的故事，探究每个创意是如何诞生的，分享对行业的见解和观点，发现那些不为人知的精彩瞬间。 

当动态声纹识别的算法精度遇见手绘空岛的治愈美学，这支由纽约顶尖艺术院校毕业生组成的“学院派极客”团队，用歌声解谜系统重新编码了鸟类文明的理性寓言。他们既是手持代码画笔的“空岛建筑师”，又是深谙情绪共振的“治愈系造梦者"——在独立游戏工业化浪潮下，如何让一只像素小鸟的振翅，掀起横跨艺术表达与玩法创新的双重风暴？他们怎样用动态声波网格重构横版解谜的空间语法？又为何说《玛卡之歌》是写给经典JRPG的一封空岛情书？让我们走进这支斩获IndiePlay双奖的“愿望单武士”团队，揭开声波与羽毛交织的创作秘辛。

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230525575.jpeg)

**Q:****请简单的介绍一下团队和游戏《玛卡之歌》吧！**

**A:**我们是Silverjay银鸟工作室，团队成员主要来自纽约大学和纽约视觉艺术学院的学生。我们工作室成立于2021年9月，在这几年曾经开发过大大小小的游戏项目，也取得了国内外一些赛事的认可。

《玛卡之歌》是一款2D横板视角的冒险游戏。玩家作为一只小鸟，会通过歌唱的方式与游戏世界的诸多元素进行互动；不同的声波能够与不同的生灵进行共鸣，并让这些生灵产生变化，以此对玩家的冒险提供多样的帮助。

《玛卡之歌》这个项目正式立项于2023年的暑假；在2024年，《玛卡之歌》参加了Cusga中国大学生游戏开发大赛以及Indieplay中国独立游戏大赛，分别获得了“最佳游戏”和“最佳学生作品”的奖项。今年，《玛卡之歌》又推进了新的地图和玩法，希望能在ChinaJoy的会场让更多玩家们抢先体验到并收集试玩反馈。

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230529168.jpg)

**Q:****请问 “****歌唱互动” 这一核心机制的灵感来源是什么？在开发过程中是如何将声波与解谜结合的？**

**A:**这可能得从《玛卡之歌》的立项本身说起。在本作前，我们曾经开发过一款类似于《空洞骑士》的银河恶魔城类游戏。那款游戏也是以小鸟为主要角色，但是玩家主要的交互手段是战斗。在开发了两年之后，我们逐渐意识到，即便我们把这个游戏做得很出色，最终所获得的评价可能只是“又一个类空洞骑士的作品”。在那个时候，我们遇到了很大的难题：是要继续开发这个和空洞骑士一摸一样的作品，还是推翻重来，去真正做出一款具有“唯一性”的作品呢？

这就是《玛卡之歌》的开始。我们重新审视了小鸟这一主题，并思考有什么东西、有什么行为是只属于小鸟的？答案显而易见：唱歌和飞行。于是，《玛卡之歌》围绕着这两个核心玩法，开始了它的开发历程。

唱歌这种交互方式的特殊性使我们的游戏有别于其它冒险游戏：在唱歌时，玩家需要考虑到歌唱的时机、方向、以及酝酿的声调（以及和不同羽毛的能力进行结合），而许多谜题和挑战都是需要玩家掌握唱歌这个核心玩法并熟练运用的。

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230527334.jpeg)

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230532307.jpeg)

**Q:****游戏采用温馨治愈的手绘风格，这一选择是基于什么样的设计理念？在创作过程中是否遇到过风格调整的挑战？**

**A:**我们希望《玛卡之歌》给玩家的感觉是亲切的，毕竟这是一个以小鸟为主角的游戏。在现实生活中，人们很容易被小鸟吸引，会觉得它们很可爱、很漂亮、声音很好听。这种亲切感是我们想要延续到《玛卡之歌》中的，所以本作的美术风格也是很温馨的。同时，这种风格也能被更多的玩家所接受，甚至会吸引到小朋友以及平常不怎么爱玩游戏的年轻人们，这也让《玛卡之歌》的受众更为广泛。

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230533282.jpeg)

**Q:****在《玛卡之歌》的开发过程中最大的挑战是什么？是如何克服的？**

**A:**经历过很多的挑战，或者说设计游戏的过程就是思考并解决一个又一个的问题。最近我们遇到的其中一个问题是：游戏的目标感不够直观。在《玛卡之歌》现在的框架下，玩家的目标是由剧情所定义的，但实际上有很多玩家并不会完整的浏览剧情，他们只是想快进到玩的部分，就这样，他们很容易忽视掉剧情中所提供的目标感。

我们希望《玛卡之歌》的游戏目标更加直观和本能，就像马里奥里面收集金币、星星和月亮一样。收集欲是人类的一种本能，以这种本能作为目标会让玩家更快的理解并沉浸在游戏之中。于是，《玛卡之歌》将在ChinaJoy的试玩中增加一种新的要素，正是为了解决这个问题而出发的。这种要素也是和小鸟息息相关的，敬请期待！

**Q:****游戏中部分谜题逻辑复杂，请问在设计谜题时是如何平衡难度与趣味性的？**

**A:**谜题是我们需要反复调整的部分。解谜的乐趣本质是顿悟的感觉，所以说，每个谜题只要能够做到“让玩家灵光一现”的感觉，那么它的设计目的就达到了。与此相对的，挑战是另一种形式：它更加考验玩家实际上手时能不能做到，也就是玩家的操作熟练度。挑战和解谜在《玛卡之歌》的主线流程中会同时出现，但我们希望的体验是能够首先教会玩家某种谜题的基础形式，同时让他们熟练操作。在这之后，我们会进行多次的反转和深化，去让玩家对同一种谜题有多面性的认知，同时也会在解谜的过程中加入挑战的元素，来调剂他们的游戏体验。

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230530403.jpeg)

**Q:****最后，有没有一些心得可以分享给也正在独立开发的伙伴们的**

**A:**我觉得有热情是很重要的，思考也是很重要的。前者属于感性，后者属于理性。游戏设计，尤其是独立游戏，就是要将这两者结合起来，去实现具有创新性的、好玩、扎实的作品。热情是一种自我表达，它能够让你的游戏变得独特、不可替代；而思考则是让你更深入的剖析游戏这种娱乐形式的手段。你需要去思考游戏的玩法逻辑是否成立、某些问题能否通过一种方式来一并解决、以及其他游戏的某些系统为什么那么上瘾…只有思考之后的实践才能让你自己有所成长，让你的游戏作品更有深度。

感谢Silverjay银鸟工作室与我们分享这段充满匠心的创作历程！通过“声波共鸣系统”这一独特创新，《玛卡之歌》以独特的互动叙事为冒险解谜品类注入了新鲜血液。“游·见”栏目正在征集采访对象，无论你是独立游戏开发者，还是行业先锋，都欢迎与我们分享自己的精彩故事和见解！预约采访请咨询下方联系人，我们下一期再见！   

联系人：Noah 

微信：Game\_Emp\_World 

邮箱：[mktasia@connection-events.com](mailto:mktasia@connection-events.com) 

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230536911.png)

**2025 ChinaJoy****创意游戏（Indie Game）**

**展区参展赞助及合作**

杨女士

（添加微信请注明来意）

微信：clarayangqian

邮箱：clara\_yang@howellexpo.net

Raj

（添加微信请注明来意）

微信：BPZbababa

邮箱：salesasia@connection-events.com

![](https://ec-net-1251389766.cos.ap-shanghai.myqcloud.com/wp-content/uploads/2025/07/20250701230539716.png)
